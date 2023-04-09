
// exports.index = (req, res) =>  res.render('index',{title:'index'})
// const exam_manageDB = require("../models/exam_manage.model")
module.exports = {

    render_ansPage : function (req, res) {
        res.render('ans',{title:'ans'})
    },
    
} 