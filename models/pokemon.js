import {paginate as usePagination} from "sequelize-paginate";
import sequelize from 'sequelize';

export const PokemonTypes = ['charizard', 'mewtwo', 'pikachu'];

export const Pokemon = usePagination(sequelize.define('Pokemon', {
    treinador: DataTypes.STRING,
    level: {
        type: sequelize.INT,
        defaultValue: 1
    },
    tipo: {
        type: DataTypes.ENUM,
        values: PokemonTypes
    }
}))

export default Pokemon
