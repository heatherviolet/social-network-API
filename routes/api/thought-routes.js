const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// /api/thought/:id
router
  .route('/:id')
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

// /:id/reaction
router
    .route('/:userid/:thoughtId/reaction')
    .put(addReaction)
    .delete(deleteReaction);

module.exports = router;