const { application } = require('express');
const express  =require ('express');

const { usercontoller } = require('../../controllers/usercontroller');
const { userValidator } = require('../../validators/userValidator');
const userRoute = express.Router();


userRoute.get('/api', userValidator ,usercontoller);

exports.userRoute = userRoute;