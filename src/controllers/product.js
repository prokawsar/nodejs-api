const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.getAll = (req, res, next) => {
    Product.find({}).exec(function (error, result) {
        if (error) throw error;
        next(result)
    })
};

exports.getOne = (req, res, next) => {
    Product.findById( {"_id" : req.params.id}, (error, result) =>{
        if(error) next(error)
        next(result)
    })
};

exports.create = (req, res, next) => {

    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: null
    });

    //need to save in db now
    product.save((error, result) => {
        if (error) next(error);
        result.message = "Product Created successfully"
        next(result)
    })
};

exports.put = (req, res, next) => {
    Product.updateOne( {"_id" : req.params.id}, req.body, (error, result) =>{
        if(error) next(error)
        result.message = "Update successful"
        next(result)
    })
};

exports.delete = (req, res, next) => {
    Product.deleteOne( {"_id" : req.params.id}, (error, result) =>{
        if(error) next(error)
        result.message = "Item deleted"
        next(result)
    })

};