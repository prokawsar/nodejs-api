const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.getAll = (req, res, next) => {
    Product.find({}).exec(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
};

exports.getOne = (req, res, next) => {
    res.status(200).json({
        message: "Get one product"
    })
};

exports.create = (req, res, next) => {

    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: null
    });

    //need to save in db now
    product.save((error) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            message: "Product Created successfully"
        })

    })
};

exports.put = (req, res, next) => {
    res.status(200).json({
        message: "Product updated"
    })
};

exports.delete = (req, res, next) => {
    res.status(200).json({
        message: "Product deleted"
    })
};