const { Thought, User } = require('../models');

module.exports = {
    getThought(req, res) {
        Thought.find()
          .then((Thought) => res.json(Thought))
          .catch((err) => res.status(500).json(err));
      },
}