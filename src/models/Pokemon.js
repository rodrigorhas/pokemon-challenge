import paginator from "sequelize-paginate";
import db from "./index";

const {paginate: usePagination} = paginator

export const PokemonTypes = ['charizard', 'mewtwo', 'pikachu'];

export const Pokemon = db.sequelize.define('Pokemon', {
    treinador: {
        type: db.Sequelize.STRING,
        unique: true
    },
    nivel: {
        type: db.Sequelize.INTEGER,
        defaultValue: 1
    },
    tipo: {
        type: db.Sequelize.ENUM,
        values: PokemonTypes,
        validate: {
            isIn: [PokemonTypes]
        }
    }
})

/**
 *
 * @param {Pokemon} model
 * @returns {{tipo: *, treinador: *, id: *, nivel: *}}
 */
export const serialize = (model) => {
    const {treinador, nivel, tipo, id} = model;
    return {id, tipo, treinador, nivel}
}

usePagination(Pokemon)

export default Pokemon
