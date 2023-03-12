const db = require("../config/dbconnection");

module.exports = { 
    showAll : async function (callback){
        var rows = await db.promise().query(
            'SELECT * FROM `user` WHERE 1',
            )
        return rows;
    },

    testAdd : function (data) {
        return db.promise().query(
        "INSERT INTO `user`(`id`, `username`, `password`, `firstname`, `lastname`, `type`, `section`)" +
        "VALUES (?,?,?,?,?,?,?) ",
        [

        ]
            
        )
    }
}