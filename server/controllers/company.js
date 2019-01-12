const Company = require('../../models').Company;

// Creates a new company and if successful, returns it.
module.exports = {
  // 'create' is a route handler for whichever Express route I choose
  // `req` is the incoming client request
  // `res` is the response we're preparing to return
  // `next` is an UNUSED param. to pass the req to the next route handler
  create(req, res) {
    return Company
    .create({
      name: req.body.name,
    })
    .then(company => res.status(201).send(company))
    .catch(error => res.status(400).send(error));
  },
  // Fetch all companies from our DB and return to user in an array
  list(req, res) {
    return Company
    .all()
    .then(company => res.status(200).send(company))
    .catch(error => res.status(400).send(error));
  },
};