const dbConnection= require('../Database');

//constructor 
const Employee = function(employee){
    this.fistName = employee.fistName;
    this.lastName = employee.lastName;
    this.nationalId = employee.nationalId;
    this.telephone = employee.telephone;
    this.email = employee.email;
    this.department = employee.department;
    this.position = employee.position;
    this.laptopManu = employee.laptopManu;
    this.model = employee.model;
    this.serialNumber = employee.serialNumber
};
Employee.create = (newEmployee, result)=>{
    sql.query("INSERT INTO Employess SET?", newEmployee, (err,res) =>{
        if(err){
            console.log("Error ",err);
            result(err, null);
            return;
        }
        console.log("Created tutorial: ", {id: res.insertId,...newEmployee});
        result(null,{id: res.insertId, ...newEmployee});
    })
}
Employee.getAll = (username) => {
    let query = "SELECT * FROM Employees";
  
    if (title) {
      query += ` WHERE username LIKE '%${username}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Employees: ", res);
      result(null, res);
    });
  };

  module.exports = Employee;