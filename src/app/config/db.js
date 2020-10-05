const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password:"170260",
    host:"localhost",
    port:"5432",
    database:"gymmanager2"
})