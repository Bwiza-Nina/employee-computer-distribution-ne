const User = require('../Models/User.Model')
const dbConnection= require('../Database');

exports.create = (req,res)=> {
    if(!req.body){
        res.status(400).send({message: 'Content can not be empty'});
    }
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    Employee.create(employee, (err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured while creating the employee'
            });
        }
        else{
            res.send(data);
        }
    });
}


//login controller
const login = (req,res) => {
    const {username, password} =req.body;
    dbConnection.query('SELECT * FROM users WHERE username = ?', [username],(err,results)=>{
        if(err){
            console.error('Error occured: ', err);
            return res.status(500).json({
                error: 'Server error'
            })
        }
        if(results.length === 0){
            return res.status(400).send('Invalid user');
        }
        const user = results[0];
        if(password !== user.password){
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        const token = generateToken(user);
        res.cookie('token', "Bearer " + token, {
            httpOnly: true
        });
        return res.status(200).json({message: 'Logged in successfully'});
    })
}

const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '10min'
    });
}

module.exports = login