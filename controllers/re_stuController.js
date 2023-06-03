exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_re_stuPage = function (req, res) {
    res.render('re_stu', { title: 're_stu' })
}