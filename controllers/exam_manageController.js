// exports.index = (req, res) =>  res.render('index',{title:'index'})
// const exam_manageDB = require("../models/exam_manage.model")
module.exports = {
    render_manageExamPage: function (req, res) {
        res.render('exam_manage', { title: 'exam_manage' })
    },
} 