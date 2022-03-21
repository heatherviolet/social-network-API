const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/users/:id
router
  .route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;