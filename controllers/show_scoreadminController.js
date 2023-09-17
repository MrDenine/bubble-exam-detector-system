const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_show_scoreadminPage = function (req, res) {
    res.render('show_scoreadmin', { title: 'show_scoreadmin' })
}

exports.getExamResult = async function (req, res) {
    try {
        const { year, term, sub_term, sec } = req.body;
        const result = await userModel.postGetExamResult(year, term, sub_term, sec);

        res.send(`<script>window.location.href = "/show_sadmin?year=${year}&term=${term}&sub_term=${sub_term}$sec=${sec}";</script>`);
    } catch (error) {
        res.send('<script>alert("ไม่สามารถค้นหาได้"); window.location.href = "/exammanage";</script>');
    }
};