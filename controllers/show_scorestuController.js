const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_show_scorestuPage = async function (req, res) {
    const username = req.session.username;
    const result = await userModel.GetResult();

    res.render('show_scorestu', { title: 'show_scorestu', username: username, result: result[0] })
}