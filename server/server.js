const express = require('express');
const path = require('path');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { default: allSeed } = require('./seeds');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db & server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
    allSeed();
});