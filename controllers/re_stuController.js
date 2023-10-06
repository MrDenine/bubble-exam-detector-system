const { error } = require("jquery");
const userModel = require("../models/user.model");

exports.handleLogout = (req, res) => {
    res.clearCookie('loggedIn');
    res.redirect('/login');
};

exports.render_re_stuPage = function (req, res) {
    const username = req.session.username;
    res.render('re_stu', { title: 're_stu', username: username })
}

exports.showScoreSTU = async function (req, res) {
    const { year, term, sub_term } = req.body
    let user = await userModel.getShowScoreSTU1(year, term, sub_term);

    for (let i=0; i < user.length; i++) {
        if(user[0][i].sub_term == "middle"){
            user[0][i].sub_term = "กลางภาค"
          }else{
            user[0][i].sub_term = "ปลายภาค"
          }
        
    }


    if (user[0].length > 0) {
        res.render('show_scorestu', { title: 'show_scorestu', result: user[0] })
    } else {
        res.render('re_stu', { title: 're_stu' });
    }
}