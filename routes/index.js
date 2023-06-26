const express = require('express');
const { errors } = require('celebrate');

const usersRouter = require('./users');
const cardsRouter = require('./cards');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const {
  loginValidator,
  signupValidator,
} = require('../middlewares/validation');

const NotFoundError = require('../utils/errors/notFoundError');

const router = express.Router();

router.post('/signin', loginValidator, login);
router.post('/signup', signupValidator, createUser);

router.use(auth);

router.use('/users', usersRouter);
router.use('/cards', cardsRouter);

router.use((req, res, next) => next(new NotFoundError('Маршрут не найден')));

router.use(errors());

module.exports = router;
