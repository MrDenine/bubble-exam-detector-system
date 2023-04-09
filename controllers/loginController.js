
// exports.index = (req, res) =>  res.render('index',{title:'index'})

module.exports = {

    render_loginPage : function (req, res) {
        res.render('login',{title:'login'})
    },
    
}