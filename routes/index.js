const express = require('express');
const router = express.Router();
//home controller
const homeController=require('../controllers/home_controller.js');


//console.log('router loaded');

router.get('/', homeController.home);

module.exports =router; 