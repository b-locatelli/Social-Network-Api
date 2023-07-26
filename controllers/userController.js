const { Thought, User } = require('../models');

module.exports = {
    getUser(req, res) {
        User.find()
          .then((User) => res.json(User))
          .catch((err) => res.status(500).json(err));
      }
    }