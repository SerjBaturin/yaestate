const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "ya",
    user: 'postgres',
    password: 'postgres'
  },
});

module.exports = knex;
