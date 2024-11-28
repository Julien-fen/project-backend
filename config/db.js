require('dotenv').config();  // Charge les variables d'environnement à partir du fichier .env

const { Sequelize } = require('sequelize'); 

// Vérification de la variable DATABASE_URL
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL n'est pas définie. Vérifiez votre fichier .env ou vos variables d'environnement.");
}

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

module.exports = sequelize;
