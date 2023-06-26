const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const errors = require('./middlewares/errorHandler');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(require('./routes/index'));

app.use(errors);

app.listen(PORT, () => {
});
