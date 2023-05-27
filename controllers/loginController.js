// exports.index = (req, res) =>  res.render('index',{title:'index'})
const { json } = require("express");
const userModel = require("../models/login.model");

module.exports = {

    render_loginPage : function (req, res) {
        res.render('login',{title:'login'})
    },
    
}