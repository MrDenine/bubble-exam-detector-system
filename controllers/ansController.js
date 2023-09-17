const { data } = require("jquery");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_ansPage = function (req, res) {
    let results = {
        year: req.query.year,
        term: req.query.term,
        topic: req.query.topic,
        sub_term: req.query.sub_term
    }
    res.render('ans', { title: 'ans', data: results })
}