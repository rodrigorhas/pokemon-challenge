export default {
    development: {
        username: "sa",
        password: "R0dr1g0rh45!@#$",
        database: "pokemon",
        host: "127.0.0.1",
        dialect: "mysql",
        dialectOptions: {
            instanceName: 'master'
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mssql",
        dialectOptions: {
            instanceName: 'master'
        },
    },
    production: {
        username: "DesafioAdmin",
        password: "Picachu123",
        database: "Desafio-jz",
        schema: "RODRIGO",
        host: "127.0.0.1",
        dialect: "mssql",
        dialectOptions: {
            instanceName: 'master'
        },
    }
}
