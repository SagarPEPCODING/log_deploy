const express = require('express');
const userRouter = new express.Router();
const { addUser } = require('./userpost');

console.log('here signup');
userRouter.route('/:email_id/:password/:confirm_password').post(addUser);

module.exports = userRouter;
