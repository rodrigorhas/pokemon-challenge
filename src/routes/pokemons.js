import express from "express";
import {Pokemon} from "../models/Pokemon";
import {StatusCode} from "./resources/status-code";

const router = express.Router();

/**
 * Sore Pokemon
 */
router.post('/', function (request, response) {
    const {body} = request.body;

    // CREATE model logic

    // should return this format - model data + generated id - code 200
    response.json({
        "id": 1,
        "tipo": "pikachu",
        "treinador": "Thiago",
        "nivel": 1
    })
})

/**
 * Update Pokemon
 */
router.put('/:id', function (request, response) {
    const {id} = request.params;
    const {trainee} = request.body;

    // UPDATE model logic

    response.sendStatus(StatusCode.NO_CONTENT)
})

/**
 * Destroy Pokemon
 */
router.delete('/:id', function (request, response) {
    const {id} = request.params;

    // DESTROY model logic

    response.sendStatus(204)
})

/**
 * Show Pokemon
 */
router.get('/:id', function (request, response) {
    const {id} = request.params;

    // SHOW model logic

    response.sendStatus(204)
})

/* Index Pokemons */
router.get('/', async function (request, response) {
    // Default page = 1 and paginate = 25
    const {docs, pages, total} = await Pokemon.paginate({ page: 1, paginate: 25 })

    response.json({docs, pages, total});
});

export default router;
