const express = require('express');
const app = express();
const authentificationRoutes = require('./routes/authentificationRoutes.js');
const db = require('./services/db.js');


const PORT = 3000;

db.execute(`
    CREATE TABLE IF NOT EXISTS utilisateur (
      telephone INT(11) NOT NULL,
      pseudo VARCHAR(255) NOT NULL,
      motdepasse VARCHAR(255) NOT NULL,
      photo VARCHAR(255),
      isOnLine INT DEFAULT 0,
      PRIMARY KEY (telephone)
    )
    engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;
`);

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/api/v1/authentification', authentificationRoutes);

app.listen(PORT, () => {
    console.log(`Le server est démarré a http://localhost:${PORT}`);
})