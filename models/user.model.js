const db = require("../config/dbconnection");

exports.getUserAll = async function (callback) {
    var rows = await db.execute(
        'SELECT * FROM `user` ORDER BY number, id',
    )
    return rows;
}

exports.getShowScoreSTU1 = async function (year, term, sub_term) {
    if (sub_term == "กลางภาค") {
        sub_term = "middle"
    } else {
        sub_term = "final"
    }

    var rows = await db.execute(
        `SELECT * FROM user_exam INNER JOIN user ON user_exam.username = user.username WHERE user_exam.year = '${year}' AND user_exam.term = '${term}' AND user_exam.sub_term = '${sub_term}'`
    )
    return rows;
}

exports.postUpdateuser = async function (number, username, password, firstname, lastname, type, section, group, time, exam_time) {
    const query = `
        UPDATE user
        SET number = '${number}', password = '${password}', firstname = '${firstname}', lastname = '${lastname}', type = '${type}', section = '${section}', groupCPE = '${group}', time = '${time}', exam_time = '${exam_time}'
        WHERE username = '${username}'
    `;
    const [result] = await db.execute(query);
    return result;
};

exports.postAdduser = async function (number, username, password, firstname, lastname, type, section, group, time, exam_time) {
    const query = `
      INSERT INTO user (number, username, password, firstname, lastname, type, section, groupCPE, time, exam_time)
      VALUES ('${number}', '${username}', '${password}', '${firstname}', '${lastname}', '${type}', '${section}', '${group}', '${time}', '${exam_time}')
    `;
    const [result] = await db.execute(query);
    return result;
};

exports.postDelUser = async function (username) {
    let rows = await db.execute(
        'DELETE FROM `user` WHERE `username` = ?',
        [username]
    );
    return rows;
}

exports.postInsertuser = async function (number, user, firstName, lastName, section, groupCPE, time, examTime) {
    try {
        const query = `
            INSERT INTO user (number, username, password, firstname, lastname, type, section, groupCPE, time, exam_time)
            VALUES ('${number}', '${user}', '1234', '${firstName}', '${lastName}', 'student', '${section}', '${groupCPE}', '${time}', '${examTime}')
        `;
        const [rows] = await db.execute(query);
        return rows;
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

exports.GetResult = async function (callback) {
    var rows = await db.execute(
        'SELECT * FROM `user_exam` INNER JOIN `user` ON user_exam.username = user.username',
    )
    return rows;
}

exports.postAddANS = async function (year, term, topic, sub_term) {
    const sql = `INSERT INTO master_exam (topic, answer, exam_score, year, term, sub_term) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [topic, '', null, year, term, sub_term];
    const [result] = await db.execute(sql, values);
    return result;
}

exports.postGetExamResult = async function (year, term, sub_term, section) {
    try {
        var rows = await db.execute(
            '',
        )
        return rows;
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

exports.postExamResult = async function (year, term, topic, sub_term, body) {
    // CREATE TABLE ans (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     year INT,
    //     term INT,
    //     topic VARCHAR(255),
    //     sub_term VARCHAR(255),
    //     ans TEXT
    // );
    try {
        const query = `
            INSERT INTO ans (year, term, topic, sub_term, ans)
            VALUES (?, ?, ?, ?, ?)
        `;

        const bodyString = JSON.stringify(body);
        const values = [year, term, topic, sub_term, bodyString];
        const [rows] = await db.execute(query, values);

        return rows;
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}