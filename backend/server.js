const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nombres', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const NameSchema = new mongoose.Schema({
  name: String
});

const Name = mongoose.model('Name', NameSchema);

app.post('/api/names', async (req, res) => {
  const { name } = req.body;
  try {
    const newName = new Name({ name });
    await newName.save();
    res.status(200).send('Nombre guardado');
  } catch (error) {
    res.status(500).send('Error al guardar el nombre');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
