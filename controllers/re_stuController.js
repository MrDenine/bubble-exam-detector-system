// exports.index = (req, res) =>  res.render('index',{title:'index'})
// const exam_manageDB = require("../models/exam_manage.model")
module.exports = {
    render_re_stuPage: function (req, res) {
        res.render('re_stu', { title: 're_stu' })
    },
} 