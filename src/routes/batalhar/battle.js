import {serialize} from "../../models/Pokemon";

export const hitChance = (a) => (b) => a / (a + b)
export const random = (max = 100) => 1 + Math.floor(Math.random() * max);

export const createBattleEntity = (model) => {
    const entity = {
        hitChance: hitChance(model.nivel),
        instance: model,
        applyEffects: async function (effect) {
            return effect(this)
        }
    }

    entity.attack = (defender) => random() <= entity.hitChance(defender.instance.nivel) * 100

    return entity;
}

/**
 * Battle Effects
 */
const BattleEffects = {
    async winBattle (entity) {
        const model = entity.instance;

        model.nivel += 1
        return model.save()
    },
    async loseBattle (entity) {
        const model = entity.instance;
        model.nivel -= 1

        if (model.nivel <= 0) {
            await model.destroy()
        } else {
            await model.save()
        }

        return model;
    },
}

/**
 * @param {Pokemon} pokeA
 * @param {Pokemon} pokeB
 * @returns {{vencedor: *, perdedor: *}}
 */
export const createBattle = async (pokeA, pokeB) => {

    let battleEnds = false
    let battleResult = {
        vencedor: null,
        perdedor: null
    }

    const round = [
        createBattleEntity(pokeA),
        createBattleEntity(pokeB),
    ]

    while(!battleEnds) {
        const [attacker, defender] = round;

        if (attacker.attack(defender)) {
            // hit - define winner and loser
            battleEnds = true;

            await attacker.applyEffects(BattleEffects.winBattle)
            await defender.applyEffects(BattleEffects.loseBattle)

            battleResult = {
                vencedor: serialize(attacker.instance),
                perdedor: serialize(defender.instance)
            }

            break;
        } else {
            // miss - swap positions
            round.reverse()
        }
    }

    return battleResult
}
