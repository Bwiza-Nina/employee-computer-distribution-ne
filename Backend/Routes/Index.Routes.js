const employess = require('../Controllers/Employee.Controllers');
const login = require('../Controllers/User.Controllers');
const users = require('../Controllers/User.Controllers');
const express = require('express');
const authenticateJWT = require('../Middlewares/Auth.Middleware');

const {employeeRouter, userRouter} = express.Router();

//employee routes
employeeRouter.post('/createEmployee', authenticateJWT ,employess.create);
employeeRouter.get('/getEmployee', authenticateJWT ,employess.findAll);

//user routes
userRouter.post('/register', users.create);
userRouter.post('/login', login);


module.exports = {userRouter, employeeRouter};