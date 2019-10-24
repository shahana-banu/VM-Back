var db = require('../db');

var Trainer = {
    getAlltrainer: function(callback)
    {
        return db.query('SELECT * from trainer', callback);
    },

    getTrainerById:function(id,callback){
 
        return db.query("select * from trainer where user_Id=?",[id],callback);
         },

    createTrainer: function (Trainer, callback) {
        return db.query('INSERT into trainer(user_Id, user_Name, first_Name, last_Name, email, Discription) values(?, ?, ?, ?, ?, ?)',[trainer.user_Id, trainer.user_Name, trainer.first_Name, trainer.last_Name, email, Discription], callback);
    }
}

module.exports = Trainer;