const User = require('../models/user');

//Simple version, without validation or sanitation
exports.getAll = (req, res, next) => {
    User.find({}).exec(function (error, result) {
        if (error) throw error;
        next(result)
    })
};

exports.getOne = (req, res, next) => {
    User.findById( {"_id" : req.params.id}, (error, result) =>{
        if(error) next(error)
        next(result)
    })
};

exports.create = (req, res, next) => {

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        image: null
    });

    //need to save in db now
    user.save((error, result) => {
        if (error) next(error);
        result.message = "User Created successfully"
        next(result)
    })
};

exports.put = (req, res, next) => {
    User.updateOne( {"_id" : req.params.id}, req.body, (error, result) =>{
        if(error) next(error)
        result.message = "Update successful"
        next(result)
    })
};

exports.delete = (req, res, next) => {
    User.deleteOne( {"_id" : req.params.id}, (error, result) =>{
        if(error) next(error)
        result.message = "User deleted"
        next(result)
    })

};