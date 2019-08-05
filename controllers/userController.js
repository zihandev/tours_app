const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields)=>{
    const newObj = {};
    Object.keys(obj).forEach(el=>{
        if (allowedFields.includes(el)) newObj[el]=obj[el];
    });
    return newObj;
};


exports.getMe = (req,res,next)=>{
    req.params.id = req.user.id;
    next();
};

exports.updateMe = catchAsync(async (req,res,next)=>{
    if ( req.body.password || req.body.passwordConfirm){
        return next(
            new AppError(
                `Route not for password update`, 400
            )
        )
    }

//Filter out unwanted fields

const filteredBody = filterObj(req.body, 'name', 'email');

//update user document
const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new : true,
    runValidators : true
});

res.status(200).json ({
    status : 'success',
    data : null
});
});
exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not defined! Please use /signup instead'
    });
  };

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);