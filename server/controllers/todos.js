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
  // Gets all Todo items and return as an array
  list(req, res) {
    return Todo
      .all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  }
};
