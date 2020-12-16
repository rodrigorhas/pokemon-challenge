const local = {
    username: "sa",
    password: "R0dr1g0rh45!@#$",
    database: "master",
    host: "pokemon-mssql",
    dialect: "mssql",
    schema: 'RODRIGO',
};

module.exports = {
    development: local,
    test: local,
    production: {
        username: "DesafioAdmin",
        password: "Picachu123",
        database: "Desafio-jz",
        host: "127.0.0.1",
        dialect: "mssql",
        schema: 'RODRIGO',
    }
}
