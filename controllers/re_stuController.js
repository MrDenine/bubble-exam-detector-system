const { error } = require("jquery");
const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_re_stuPage = function (req, res) {
    const username = req.session.username;
    res.render('re_stu', { title: 're_stu', username: username })
}

exports.showScoreSTU = async function (req, res) {
    const { year, term, sub_term } = req.body
    const user = await userModel.getShowScoreSTU1(year, term, sub_term);

    if (user[0].length > 0) {
        res.render('show_scorestu', { title: 'show_scorestu', result: user[0] })
    } else {
        res.render('re_stu', { title: 're_stu' });
    }
}