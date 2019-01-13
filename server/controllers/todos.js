const Todo = require('../../models').Todo;

// Creates a new todo and returns it, if succesful
module.exports = {
  create(req, res) {  // route handler
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
