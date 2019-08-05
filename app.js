const express = require('express');
const bodyParser = require('body-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');

const cookieParser = require('cookie-parser');

const app = express();


// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

console.log('hey server!!')

    //ROUTES
    // app.use('/', viewRouter);
    app.use('/api/v1/tours', tourRouter);
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/reviews', reviewRouter);
   app.use('/api/v1/bookings', bookingRouter);


    app.use(globalErrorHandler);

    module.exports = app;