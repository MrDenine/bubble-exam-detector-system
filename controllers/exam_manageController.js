const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_manageExamPage = function (req, res) {
    res.render('exam_manage', { title: 'exam_manage' });
}

exports.insertData = async function (req, res) {
    try {
        const { year, term, topic, sub_term } = req.body;
        const result = await userModel.postAddANS(year, term, topic, sub_term);

        res.send('<script>alert("บันทึกสำเร็จ"); window.location.href = "/exammanage";</script>');
    } catch (error) {
        res.send('<script>alert("ไม่สามารถบันทึกได้"); window.location.href = "/exammanage";</script>');
    }
};

//ALTER TABLE master_exam DROP PRIMARY KEY, MODIFY COLUMN id INT AUTO_INCREMENT PRIMARY KEY; <-- run in data base table master_exam -->