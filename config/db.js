require('dotenv').config();

const { Sequelize } = require('sequelize');

// Connexion à PostgreSQL avec les variables d'environnement
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

console.log("DATABASE_URL:", process.env.DATABASE_URL);
module.exports = sequelize;
