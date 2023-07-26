const { Thought, User } = require('../models');

module.exports = {
  getThought(req, res) {
      Thought.find()
        .then((Thought) => res.json(Thought))
        .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.ThoughtId })
        .select('-__v')
        .then((Thought) =>
          !Thought
            ? res.status(404).json({ message: 'No Thought with that ID' })
            : res.json(Thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thought.create(req.body)
          .then((Thought) => res.json(Thought))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

      deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.ThoughtId })
          .then((Thought) =>
            !Thought
              ? res.status(404).json({ message: 'No Thought with that ID' })
              : Student.deleteMany({ _id: { $in: Thought.students } })
          )
          .then(() => res.json({ message: 'Thought and students deleted!' }))
          .catch((err) => res.status(500).json(err));
      },

      updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.ThoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((Thought) =>
            !Thought
              ? res.status(404).json({ message: 'No Thought with this id!' })
              : res.json(Thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}