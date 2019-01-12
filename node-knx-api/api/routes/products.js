const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'hallo, handling request GET from products'
    })
});

router.get('/:productID', (req,res,next)=>{
    const id = req.params.productID;
    if (id === 'spetial'){
        res.status(200).json({
            message: 'Wow, such a product',
            id: id
        })
    }else {
        res.status(200).json({
            message: 'Naaaaa',
            id: id
        })
    }
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'hallo, handling request POST from products',
        createdProduct: product
    })
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'hallo, You PATCH the product'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'hallo, you Delete the product'
    })
});

module.exports = router;



