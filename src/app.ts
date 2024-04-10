import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv'
const routes = require('./routes')

dotenv.config()

const app: Express = express();
const port: number = 3000

app.use('/v1', routes)

app.listen(port, () => {
  console.log('listening on port ' + port);
})