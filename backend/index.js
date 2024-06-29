
import express from 'express';

import cors from 'cors';


import Connect_db from './database/data.js';

import 'dotenv/config';



const app = express();
const port = 4000;

app.use(cors({
  origin: '*'
}));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const fruit = ["apple", "grapes", "orbhi"]


Connect_db()

app.get('/fruit', (req, res) => {

res.send(fruit)


})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});





//Srinivas@2005




