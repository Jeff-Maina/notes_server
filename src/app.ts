import express, { Express, Request, Response } from 'express';
const cors = require('cors')
const dotenv = require('dotenv');
import "./database/connection"

dotenv.config({
  path: '../.env'
})


import bodyParser from 'body-parser';
const routes = require('./routes')


const port = Number(process.env.PORT)

const app: Express = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/v1', routes)


app.listen(port, () => {
  console.log('listening on port ' + port);
})