import {param} from "express-validator";

export const BattleValidationRules = [
    param('pokemonAId').isInt(),
    param('pokemonBId').isInt(),
]
