const db = require("../config/dbconnection");

module.exports = { 
    getUserAll : async function (callback){
        var rows = await db.promise().query(
            'SELECT * FROM `user` WHERE 1',
            )
        return rows;
   }
}