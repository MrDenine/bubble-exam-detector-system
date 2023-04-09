const db = require("../config/dbconnection");

module.exports = { 
    getUserAll : async function (callback){
        var rows = await db.promise().query(
            'SELECT * FROM `user` WHERE 1',
            )
        return rows;
   },

//    showdd : async function (data){
//         console.log("data: ", username)
//    }
    //   addUser : function (data) {
//       return db.promise().query(
//        "INSERT INTO `user`(`id`, `username`, `password`, `firstname`, `lastname`, `type`, `section`)" +
//        "VALUES (?,?,?,?,?,?,?) ",
//        [
//            
//        ]
            
//       )
 //   }
}