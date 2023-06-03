// exports.index = (req, res) =>  res.render('index',{title:'index'})
// const exam_manageDB = require("../models/exam_manage.model")
module.exports = {
    render_show_scorestuPage: function (req, res) {
        res.render('show_scorestu', { title: 'show_scorestu' })
    },
} 