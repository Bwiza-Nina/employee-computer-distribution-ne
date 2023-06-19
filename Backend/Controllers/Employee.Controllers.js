const Employee = require('../Models/Employee.Model');

exports.create = (req,res)=> {
    if(!req.body){
        res.status(400).send({message: 'Content can not be empty'});
    }
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalId: req.body.nationalId,
        telephone: req.body.telephone,
        email: req.body.email,
        department: req.body.department,
        position: req.body.position,
        laptopManu: req.body.laptopManu,
        model: req.body.model,
        serialNumber: req.body.serialNumber
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

exports.findAll = (req,res)=>{
    const username = req.body.username;

    Employee.getAll(username, (err,data)=>{
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured'
            });
        }else{
            res.send(data);
        }
    })
}