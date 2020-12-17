const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const postmodel = require('./postModel');

async function addUser(req, res) {
    let { email_id,password,confirm_password } = req.params;
    console.log(email_id);
    console.log(password);
    console.log(confirm_password);
    try {
      let user = await postmodel.adduserbyemailidpass(email_id,password,confirm_password);
      console.log(user);
      res.status(201).json({
        status: 'success',
        user: user != undefined ? user : 'userid not valid...',
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failure hai',
        user: err.message,
      });
    }
  }

  module.exports.addUser = addUser;