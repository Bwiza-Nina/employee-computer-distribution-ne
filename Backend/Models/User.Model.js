const dbConnection= require('../Database');

const User = function(user){
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
};
User.create = (newEmployee, result)=>{
    dbConnection.query("INSERT INTO Users SET?", newEmployee, (err,res) =>{
        if(err){
            console.log("Error ",err);
            result(err, null);
            return;
        }
        console.log("Created tutorial: ", {id: res.insertId,...newEmployee});
        result(null,{id: res.insertId, ...newEmployee});
    })
}

module.exports = User;