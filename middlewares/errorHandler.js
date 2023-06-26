module.exports = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  if (statusCode === 500) {
    res.status(500).send({ message: 'Произошла внутренняя ошибка сервера.' });
  } else {
    res.status(error.statusCode).send({ message: error.message });
  }

  next();
};
