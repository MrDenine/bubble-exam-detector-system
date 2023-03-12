const exam_manageDB = require("../models/exam_manage.model")

module.exports = {
   
    render_manageExamPage : function(req, res) {
        let data = exam_manageDB.showAll();
        // console.log("ABS: ", data);
        res.render('exam_manage', {res: data})
    }, 

    test : function(req,res) {
        console.log("data: ", req.body)
    }
}