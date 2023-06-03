const connection = require("../config/dbconnection");

module.exports = {
    getUserByUsernameAndPassword: async function (username, password) {
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM user WHERE username = ? AND password = ?',
                [username, password]
            );
            return rows;
        } catch (err) {
            throw err;
        }
    }
};