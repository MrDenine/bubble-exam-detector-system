
// exports.index = (req, res) =>  res.render('index',{title:'index'})
const { json } = require("express");
const userModel = require("../models/user.model");

module.exports = {

    render_userPage : function (req, res) {
        res.render('user',{title:'user'})
    },
    showUserPage : async function (req, res) {
        let id = await userModel.getUserAll();
        console.log(id);
        
    }
}