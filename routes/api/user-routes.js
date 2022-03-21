const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .get(addFriend)
    .delete(removeFriend)

module.exports = router;