exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_manageExamPage = function (req, res) {
    res.render('exam_manage', { title: 'exam_manage' })
}