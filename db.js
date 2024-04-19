const { Pool } = require("pg");

const pool = new Pool({
  user: "user123",
  host: "db",
  database: "db123",
  password: "password123",
  port: 5432,
});

module.exports = pool;
