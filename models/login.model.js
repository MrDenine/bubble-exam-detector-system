const connection = require("../config/dbconnection");

module.exports = {
    getUserByUsernameAndPassword: async function (username, password) {
        try {
            console.log(username, ' ', password);
            const [rows] = await connection.execute(`SELECT * FROM user WHERE username = ${username} AND password = ${password}`);
            return rows;
        } catch (err) {
            throw err;
        }
    }
};
