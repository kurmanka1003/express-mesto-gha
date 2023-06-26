const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const {
  createCardValidator,
  inputIdCardValidator,
} = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', createCardValidator, createCard);
router.delete('/:cardId', inputIdCardValidator, deleteCard);
router.put('/:cardId/likes', inputIdCardValidator, likeCard);
router.delete('/:cardId/likes', inputIdCardValidator, dislikeCard);

module.exports = router;
