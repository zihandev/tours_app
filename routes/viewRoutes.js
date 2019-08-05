const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

//success URL
// router.get(
//     '/my-tours',
//     bookingController.createBookingCheckout,
//     authController.protect,
//     tourController.getMyTours
//   );