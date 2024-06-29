
import express from 'express';

import cors from 'cors';


const app = express();
const port = 4000;

app.use(cors({
  origin: '*'
}));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const fruit = ["apple", "grapes", "orbhi"]


app.get('/fruit', (req, res) => {

res.send(fruit)


})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});










