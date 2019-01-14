const todos = require('./todos');
const todoItems = require('./todoitems');

// Where we are going to be exporting our controllers from.
// Helps consolidate import/require statements in one place.
module.exports = {
  todos,
  todoItems,
};