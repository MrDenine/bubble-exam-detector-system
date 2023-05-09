
// exports.index = (req, res) =>  res.render('index',{title:'index'})
const { json } = require("express");
const userModel = require("../models/user.model");

module.exports = {

    render_userPage : async function (req, res) {
        let user = await userModel.getUserAll();

        res.render('user',{"title" : user[0]})
    },

    updateUser : async function (req, res) {
        let user = await userModel.postUpdateuser(req.body);
        res.json({"response" : req.body})
        //console.log(req.body.username);
    } 
}