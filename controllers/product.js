const Product = require('../models/product');

//Simple version, without validation or sanitation
exports.get_all = function (req, res) {
    Product.find({}).exec(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
};

exports.create = function (req, res) {

    let product = new Product({
        //somewhat req.body.name is not working here
        name: "Apple", //req.body.name
        price: "200", //req.body.price
        image: null
    });

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};