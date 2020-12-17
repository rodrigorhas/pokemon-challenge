import express from "express";
import {Pokemon, serialize} from "../models/Pokemon";
import {StatusCode} from "./resources/status-code";
import {errorHandler} from "../utils";

const router = express.Router();

/**
 * Sore Pokemon
 */
router.post('/', async (request, response) => {
    const {body} = request;

    // CREATE model logic
    const pokemon = await Pokemon.create({
        "tipo": body.tipo,
        "treinador": body.treinador
    }).catch(errorHandler(request, response))

    response.json(serialize(pokemon))
})

/**
 * Update Pokemon
 */
router.put('/:id', async (request, response) => {
    const {id} = request.params;
    const {treinador} = request.body;

    if (!treinador) {
        // TODO: validate schema with express-validator
    }

    // UPDATE model logic
    await Pokemon.update({treinador}, {where: {id}})

    response.sendStatus(StatusCode.NO_CONTENT)
})

/**
 * Destroy Pokemon
 */
router.delete('/:id', async (request, response) => {
    const {id} = request.params;

    // TODO: add validation to check if resource exists?
    // DESTROY model logic
    await Pokemon.destroy({where: {id}})

    response.sendStatus(204)
})

/**
 * Show Pokemon
 */
router.get('/:id', async (request, response) => {
    const {id} = request.params;

    // SHOW model logic
    const resource = await Pokemon.findOne({where: {id}})

    if (!resource) {
        // TODO: throw validation error if resource doesn't exists?
    }

    response.json(resource)
})

/**
 *  Index Pokemons
 */
router.get('/', async (request, response) => {
    // Uncomment to paginate
    // Default page = 1 and paginate = 25
    // Support filters?
    // const {docs: resources, pages, total} = await Pokemon.paginate({ page: 1, paginate: 25 })

    const resources = await Pokemon.findAll();

    response.json(resources);
});

export default router;
