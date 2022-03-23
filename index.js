const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const filmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/filmes.routes');
const episodeosRoutes = require('./src/routes/episodeos.routes');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use('/', filmeRoutes);
app.use('/usuario', usuarioRoutes );
app.use('/episodeo', episodeosRoutes );

app.listen(3000, () => {
    console.log('Servidor OK');
});