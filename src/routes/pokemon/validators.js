import {body} from "express-validator";
import {PokemonTypes} from "../../models/Pokemon";

export const StorePokemonValidationRules = [
    body('tipo').isIn(PokemonTypes),
    body('treinador').isString()
]

export const UpdatePokemonValidationRules = [
    body('treinador').isString()
]
