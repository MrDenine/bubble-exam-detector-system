const userModel = require("../models/user.model");
let results

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_ansPage = function (req, res) {
    const username = req.session.username;
    results = {
        year: req.query.year,
        term: req.query.term,
        topic: req.query.topic,
        sub_term: req.query.sub_term
    }
    res.render('ans', { title: 'ans', data: results, username: username })
}

exports.postExamResult = async function (req, res) {
    try {
        const url = require('url');
        const urlString = req.rawHeaders[33];
        const parsedUrl = new URL(urlString);
        const year = parsedUrl.searchParams.get('year');
        const term = parsedUrl.searchParams.get('term');
        const topic = parsedUrl.searchParams.get('topic');
        const sub_term = parsedUrl.searchParams.get('sub_term');

        const result = await userModel.postExamResult(year, term, topic, sub_term, req.body);
        res.send('<script>alert("บันทึกสำเร็จ"); window.location.href = "/exammanage";</script>');
    } catch {
        res.send('<script>alert("ไม่สามารถบันทึกได้"); window.location.href = "/exammanage";</script>');
    }
}