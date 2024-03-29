const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_show_scoreadminPage = async function (req, res) { 
    const username = req.session.username;
    const result = await userModel.GetResult();

    res.render('show_scoreadmin', { title: 'show_scoreadmin', username: username, result: result[0] })
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