const db = require("../config/dbconnection");

exports.getUserAll = async function (callback) {
    var rows = await db.execute(
        'SELECT * FROM `user` ORDER BY username',
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

exports.postAddANS = async function (year, term, topic, sub_term) {
    const sql = `INSERT INTO master_exam (topic, answer, exam_score, year, term, sub_term) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [topic, '', null, year, term, sub_term];

    const [result] = await db.execute(sql, values);
    return result;
}

exports.postInsertuser = async function (user, firstName, lastName, sec, status) {
    try {
        const query = `
            INSERT INTO user (username, firstname, password, lastname, type, section)
            VALUES (?, ?, '1234', ?, ?, ?)
        `;

        const values = [user, firstName, lastName, status, sec];
        const [rows] = await db.execute(query, values);

        console.log(`Inserted ${rows.affectedRows} row(s)`);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

exports.postGetExamResult = async function (year, term, sub_term, sec) {
    try {
        var rows = await db.execute(
            '',
        )
        return rows;
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}