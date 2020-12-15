import express from "express";

const router = express.Router();

router.get('/', function (req, res, next) {
    // render swagger-ui
    res.render('index', {title: 'Express'});
});

module.exports = router;
