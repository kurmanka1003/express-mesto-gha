const router = require('express').Router();

const {
  getUserById,
  getUser,
  getUserInfo,
  updateAvatar,
  updateProfile,
} = require('../controllers/users');

const {
  getUserByIdValidator,
  updateAvatarValidator,
  updateProfileValidator,
} = require('../middlewares/validation');

router.get('/', getUser);
router.get('/me', getUserInfo);
router.get('/:userId', getUserByIdValidator, getUserById);
router.patch('/me', updateProfileValidator, updateProfile);
router.patch('/me/avatar', updateAvatarValidator, updateAvatar);

module.exports = router;
