const isDocker = process.env.IS_DOCKER || false

module.exports = {
    development: {
        username: 'sa',
        password: 'P0k3m0nch4ll3ng3',
        database: 'master',
        host: isDocker ? 'pokemon-mssql' : 'localhost',
        dialect: 'mssql',
        schema: 'POKEMON',
    },
    production: {
        username: 'DesafioAdmin',
        password: 'Picachu123',
        database: 'Desafio-jz',
        host: 'jzd-dev-desafio.database.windows.net',
        dialect: 'mssql',
        schema: 'RODRIGO',
    }
}