const mysql = require('mysql2/promise');
const config = require('../config');


async function execute(sql) {
  const connection = await mysql.createConnection(config.db);
  const [rows,] = await connection.execute(sql);
  await connection.end();
  return rows;
}

module.exports = {
  execute,
}