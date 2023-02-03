const {fail} = require('assert');
const express = require('express');
const {readData, moviesPath} = require('./readData');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const data = await readData();
  const id = req.params.id;

  const selectedMovie = data.find((movie) => +movie.id === +id);
  res.status(200).json({
    status: 'success',
    data: {
      selectedMovie,
    },
  });
});

app.get('/movies', async (req, res) => {
  const data = await readData();
  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
});

// app.post('/movies', async (req, res) => {
//   try {
//     const movies = await readData();
//     const {movie, price} = req.body;
//     const newMovie = {
//       // acessamos a chave id do ultimo objeto do array de maneira dinâmica e incrementamos + 1 em seu valor
//       id: movies[movies.length - 1].id + 1,
//       movie,
//       price,
//     };
//     const allMovies = JSON.stringify([...movies, newMovie]);
//     await fs.writeFile(moviesPath, allMovies);
//   } catch (err) {
//     res.status(500).send({message: err.message});
//   }
// });

app.post('/movies', async (req, res) => {
  try {
    const data = await readData();
    const {movie, price} = req.body;
    const newMovie = {
      id: data[data.length - 1].id + 1,
      movie,
      price,
    };
    const newData = [...data, newMovie];
    await fs.writeFile(moviesPath, JSON.stringify(newData));
    res.status(201).json({
      message: 'success',
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      message: 'fail',
      error,
    });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const data = await readData();
    const {id} = req.params;
    const arrayPos = data.findIndex((el) => el.id === +id);
    console.log(arrayPos);
    data.splice(arrayPos, 1);
    await fs.writeFile(moviesPath, JSON.stringify(data));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      message: 'fail',
      error,
    });
  }
});

module.exports = app;
