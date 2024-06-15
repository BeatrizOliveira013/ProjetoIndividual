require('dotenv-flow').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.APP_PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users'); 
const resultsRouter = require('./src/routes/results');

app.use('/', indexRouter);
app.use('/users', usersRouter); // Rota p usuarios
app.use('/results', resultsRouter);

app.listen(port, () => {
  console.log(`
  ##   ##  #######  #####    ######     ##   ##          #########    #########    ########## ##########  #######    #######
  ##   ##  ##   ##  ##  ##   ##   ##    ##   ##          ##     ##    ##     ##         ##        ##      ##         ##    ##
  ##   ##  ##   ##  ##  ##   ##   ##    ##   ##          ##     ##    ##     ##         ##        ##      ##         ##    ##
  #######  #######  #####    ######       ###    ######  #########    ##     ##         ##        ##      ######     ######
  ##   ##  ##   ##  ##  ##   ##   ##       ##            ##           ##     ##         ##        ##      ##         ##   ##
  ##   ##  ##   ##  ##   ##  ##   ##       ##            ##           ##     ##         ##        ##      ##         ##    ##
  ##   ##  ##   ##  ##   ##  ##    ##      ##            ##           #########         ##        ##      #######    ##     ##
  Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${port}`);
});

