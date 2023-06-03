const db = require("../config/dbconnection");

module.exports = {
    getUserAll: async function (callback) {
        var rows = await db.execute(
            'SELECT * FROM `user` WHERE 1',
        )
        return rows;
    },

    postUpdateuser: async function (data) {
        var rows = await db.execute(
            "UPDATE user SET password = ?, firstname = ?, lastname = ?, type = ?, section = ? WHERE username = ?",
            [
                data.username,
                data.password,
                data.firstname,
                data.lastname,
                data.type,
                data.section
            ]
        )
        return rows
    },

    postAdduser: async function (callback) {
        var rows = await db.execute(
            "INSERT INTO `user`(`id`, `username`, `password`, `firstname`, `lastname`, `type`, `section`)" +
            "VALUES (?,?,?,?,?,?,?)",
            [
                data.id,
                data.username,
                data.password,
                data.firstname,
                data.lastname,
                data.type,
                data.section
            ]
        )
        return rows
    },

    postDeluser: async function (callback) {
        var rows = await db.execute(
            'DELETE FROM `user` WHERE `username` = username?',
        )
        return rows;
    }
}