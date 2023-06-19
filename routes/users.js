const router = require('express').Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getUser);
router.get('/:userId', usersController.getUserById);
router.post('/', usersController.createUser);
router.patch('/me', usersController.updateUser);
router.patch('/me/avatar', usersController.updateUserAvatar);

module.exports = router;
