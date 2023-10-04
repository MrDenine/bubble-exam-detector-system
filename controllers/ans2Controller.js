exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_ans2Page = function (req, res) {
    const username = req.session.username;
    res.render('ans2', { title: 'ans2', username: username })
}