import {paginate as usePagination} from "sequelize-paginate";
import db from "./index";

export const PokemonTypes = ['charizard', 'mewtwo', 'pikachu'];

export const Pokemon = usePagination(db.Sequelize.define('Pokemon', {
    treinador: db.Sequelize.STRING,
    level: {
        type: db.Sequelize.INT,
        defaultValue: 1
    },
    tipo: {
        type: db.Sequelize.ENUM,
        values: PokemonTypes
    }
}))

export default Pokemon
