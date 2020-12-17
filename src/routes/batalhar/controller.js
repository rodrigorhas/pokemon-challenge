import express from "express";
import {Pokemon} from "../../models/Pokemon";
import {useSchemaValidation} from "../../utils";
import {BattleValidationRules} from "./validators";
import {ApplicationValidationError} from "../../resources/applicationValidationError";
import {StatusCode} from "../../resources/status-code";
import {createBattle} from "./battle";

const router = express.Router();

/**
 * Battle Pokemon
 */
router.post('/:pokemonAId/:pokemonBId', useSchemaValidation(BattleValidationRules), async (request, response) => {
    const {pokemonAId, pokemonBId} = request.params;

    const pokemonA = await Pokemon.findOne({where: {id: pokemonAId}})
    const pokemonB = await Pokemon.findOne({where: {id: pokemonBId}})

    const responseContent = new ApplicationValidationError()

    if (!pokemonA) {
        responseContent.addError({
            message: 'Pokemon A not found'
        })
    }

    if (!pokemonB) {
        responseContent.addError({
            message: 'Pokemon B not found'
        })
    }

    if (!pokemonA || !pokemonB) {
        return response.status(StatusCode.UNPROCESSABLE_ENTITY).send(responseContent)
    }

    const battleResult = await createBattle(pokemonA, pokemonB)

    response.json(battleResult)
})

export default router;
