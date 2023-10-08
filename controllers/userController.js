const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_userPage = async function (req, res) {
    let user = await userModel.getUserAll();
    const username = req.session.username;
    res.render('user', { title: user[0], username: username });
}

exports.updateUser = async function (req, res) {
    try {
        const { number, username, password, firstname, lastname, type, section, group, time, exam_time } = req.body;
        const updateuser = await userModel.postUpdateuser(number, username, password, firstname, lastname, type, section, group, time, exam_time);
        res.json({ status: "Success", message: "User update successfully" });
    } catch (error) {
        console.log(error)
        res.json({ status: "Failed", message: "Failed to update user" });
    }
};

exports.insertUser = async function (req, res) {
    try {
        const { number, user, firstName, lastName, section, groupCPE, time, examTime } = req.body;
        const insertuser = await userModel.postInsertuser(number, user, firstName, lastName, section, groupCPE, time, examTime);
        res.json({ status: "Success", message: "User update successfully" });
    } catch (error) {
        res.json({ status: "Failed", message: "Failed to update user" });
    }
};

exports.addUser = async function (req, res) {
    try {
        const { number, username, password, firstname, lastname, type, section, group, time, exam_time } = req.body;
        const result = await userModel.postAdduser(number,username, password, firstname, lastname, type, section, group, time, exam_time);

        res.json({ status: "Success", message: "User added successfully" });
    } catch (error) {
        console.log(error)
        res.json({ status: "Failed", message: "Failed to add user" });
    }
};

exports.delUser = async function (req, res) {
    try {
        let username = req.params.username;
        let result = await userModel.postDelUser(username);
        res.redirect('/user');
    } catch (error) {
        res.json({ status: "Failed", message: "Failed to dalete user" });
    }
}