const express = require('express')
const app = express()
const port = 3000
const cars = [];

let carsAutoIncrement = 2;

app.use(express.json())


app.get('/cars', (req, res) => {
  res.send(cars)
})

app.post('/cars', (req, res) => {
  req.body.id = carsAutoIncrement;
  cars.push(req.body)
  carsAutoIncrement++;

  res.status(201).end()
})

app.get('/cars/:id', (req, res) => {
  console.log(req.params)
  res.send(cars.find(obj => obj.id === parseInt(req.params.id)));

})

app.put('/cars/:id', (req, res) => {
const id = req.params.id
cars [cars.findIndex((x) => x.id === parseInt(id))] = req.body
res.status(202).end()
});

app.delete('/cars/:id', (req, res) => {
removeObjectWithId(cars, parseInt(req.params.id))
  res.status(204).end()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  arr.splice(objWithIdIndex, 1);

  return arr;
}