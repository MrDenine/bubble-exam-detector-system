exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_show_scoreadminPage = function (req, res) {
    res.render('show_scoreadmin', { title: 'show_scoreadmin' })
}