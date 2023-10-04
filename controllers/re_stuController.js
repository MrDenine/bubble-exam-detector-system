exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_re_stuPage = function (req, res) {
    const username = req.session.username;
    res.render('re_stu', { title: 're_stu', username: username })
}