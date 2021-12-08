var bcrypt = require('bcrypt');
const User = require('../models/User')

exports.login =  async (req, res) => {
   return res.render('login');
}

exports.register = async(req, res) => {
  return res.render('register');
}


exports.registerUser = async (req, res) => {

}

exports.logout = async(req, res) => {

}