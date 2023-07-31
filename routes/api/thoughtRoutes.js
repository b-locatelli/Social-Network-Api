const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

// getting all thoughts and creating thoughts
router.route('/').get(getThought).post(createThought);

// routes that reqire use of specific id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

    // routes that use a reaction tied to a specific id
router.route('/:thoughtId/reactions')
.post(createReaction)

// routes deleting a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;