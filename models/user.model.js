const db = require("../config/dbconnection");

exports.getUserAll = async function (callback) {
    var rows = await db.execute(
        'SELECT * FROM `user`',
    )
    return rows;
}

exports.postUpdateuser = async function (username, password, firstname, lastname, type, section) {
    const query = `
        UPDATE user
        SET password = ?, firstname = ?, lastname = ?, type = ?, section = ?
        WHERE username = ?
    `;
    const params = [password, firstname, lastname, type, section, username];

    const [result] = await db.execute(query, params);
    return result;
};

exports.postAdduser = async function (username, password, firstname, lastname, type, section) {
    const query = `
      INSERT INTO user (username, password, firstname, lastname, type, section)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [username, password, firstname, lastname, type, section];

    const [result] = await db.execute(query, params);
    return result;
};

exports.postDelUser = async function (username) {
    let rows = await db.execute(
        'DELETE FROM `user` WHERE `username` = ?',
        [username]
    );
    return rows;
}
