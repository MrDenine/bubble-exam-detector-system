
// exports.index = (req, res) =>  res.render('index',{title:'index'})
// const exam_manageDB = require("../models/exam_manage.model")
module.exports = {

    render_show_scoreadminPage : function (req, res) {
        res.render('show_scoreadmin',{title:'show_scoreadmin'})
    },
    
} 