const express = require('express');
const sequelize = require('./config/db');
const classRoutes = require('./routes/classes');
const memberRoutes = require('./routes/members');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/classes', classRoutes);
app.use('/api/members', memberRoutes);

// Synchronisation avec la base de données
sequelize.sync({ force: false }).then(() => {
  console.log('Base de données synchronisée.');
  app.listen(3001, () => {
    console.log('Serveur backend disponible sur http://localhost:3001');
  });
});
