const express = require('express');
const userRouter = new express.Router();
const { getUser } = require('./userlogin');
// const { addUser } = require('./userpost');

console.log('am in login.js');


userRouter.route('/:email_id').get(getUser);

module.exports = userRouter;
