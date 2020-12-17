import {body} from "express-validator";
import {PokemonTypes} from "../../models/Pokemon";

export const StoreValidationRules = [
    body('tipo').isIn(PokemonTypes),
    body('treinador').isString()
]

export const UpdateValidationRules = [
    body('treinador').isString()
]
