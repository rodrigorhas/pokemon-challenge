import tedious from 'tedious'

export default {
  development: {
    username: "sa",
    password: "R0dr1g0rh45!@#$",
    database: "pokemon",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectModule: tedious
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mssql",
    dialectModule: tedious
  },
  production: {
    username: "DesafioAdmin",
    password: "Picachu123",
    database: "Desafio-jz",
    schema: "RODRIGO",
    host: "127.0.0.1",
    dialect: "mssql",
    dialectModule: tedious
  }
}
