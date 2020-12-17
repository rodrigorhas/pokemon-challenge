import express from "express";
import pokemonRouter from "./pokemon";
import battleRouter from "./batalhar";
// import apiDocsRouter from "./docs";

const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.use('/pokemons', pokemonRouter);
router.use('/batalhar', battleRouter);
// router.use('/api-docs', apiDocsRouter);

export default router;
