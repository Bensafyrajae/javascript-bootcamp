const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "rajae19",
    database: "blog_db",
    port: 5432,
  },
});

module.exports = db;