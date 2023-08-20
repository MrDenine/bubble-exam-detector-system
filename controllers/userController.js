const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_userPage = async function (req, res) {
    let user = await userModel.getUserAll();
    res.render('user', { title: user[0] });
}

exports.updateUser = async function (req, res) {
    try {
        const { username, password, firstname, lastname, type, section } = req.body;
        const updateuser = await userModel.postUpdateuser(username, password, firstname, lastname, type, section);
        res.json({ status: "Success", message: "User update successfully" });
    } catch (error) {
        res.json({ status: "Failed", message: "Failed to update user" });
    }
};

exports.insertUser = async function (req, res) {
    try {
        const { user, firstName, lastName, sec, status } = req.body;
        const insertuser = await userModel.postInsertuser(user, firstName, lastName, sec, status);
        res.json({ status: "Success", message: "User update successfully" });
    } catch (error) {
        res.json({ status: "Failed", message: "Failed to update user" });
    }
};

exports.addUser = async function (req, res) {
    try {
        const { username, password, firstname, lastname, type, section } = req.body;
        const result = await userModel.postAdduser(username, password, firstname, lastname, type, section);
        res.json({ status: "Success", message: "User added successfully" });
    } catch (error) {
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