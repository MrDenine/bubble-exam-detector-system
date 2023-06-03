exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_show_scorestuPage = function (req, res) {
    res.render('show_scorestu', { title: 'show_scorestu' })
}