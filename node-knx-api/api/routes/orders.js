const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: ' Oreders GET'
    })
});

router.get('/:orderID', (req,res,next)=>{
    const id = req.params.orderID;
    if (id === 'spetial'){
        res.status(200).json({
            message: 'Wow, such a Order',
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
    res.status(201).json({
        message: 'Oreders POST'
    })
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'hallo, You PATCH the ORDER'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'hallo, you Delete ORDER'
    })
});



module.exports = router;
