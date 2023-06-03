exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_ans2Page = function (req, res) {
    res.render('ans2', { title: 'ans2' })
}