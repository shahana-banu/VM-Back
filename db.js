const mysql      = require ('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'vm'
    
    });
    
    
    //DB connection
    connection.connect(function(err) {
        if 
            (err) throw err;
        else
            console.log("Connected!");
      });

      module.exports=connection;