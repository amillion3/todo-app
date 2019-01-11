const companyController = require('../controllers').company;

// Add an API route
module.exports = app => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the ToDos API!',
  }));

// Company POST route
app.post('/api/company', companyController.create);
};