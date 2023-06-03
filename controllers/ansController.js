exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_ansPage = function (req, res) {
    res.render('ans', { title: 'ans' })
}