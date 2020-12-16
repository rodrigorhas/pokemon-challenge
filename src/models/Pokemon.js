import paginator from "sequelize-paginate";
import db from "./index";

const {paginate: usePagination} = paginator

export const PokemonTypes = ['charizard', 'mewtwo', 'pikachu'];

export const Pokemon = db.sequelize.define('Pokemon', {
    treinador: db.Sequelize.STRING,
    level: {
        type: db.Sequelize.INTEGER,
        defaultValue: 1
    },
    tipo: {
        type: db.Sequelize.ENUM,
        values: PokemonTypes
    }
})

usePagination(Pokemon)

export default Pokemon
