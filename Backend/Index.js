const express = require('express');
const cookieParser = require('cookie-parser');
const DatabaseConnection = require('./Database');
const {userRouter,employeeRouter} = require('./Routes/Index.Routes')
const cors = require('cors');
require('dotenv').config();
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome To employee distribution MIS');
})
app.use('/user', userRouter);
app.use('/employee', employeeRouter);

//swagger documentation
const swaggerDocs = require('./swagger.json');
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocs, false, {
    docExpansion: "none"
}));

//Listen to the port
const port = process.env.PORT || "3000";
app.listen(port, ()=>console.log(`The server is listening on port ${port}`));

