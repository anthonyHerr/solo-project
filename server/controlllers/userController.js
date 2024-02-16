const User = require('../model/userModel.js')

const userController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  createUser(req, res, next) {
    const { firstName, bodyPart, workouts } = req.body;
    const newUser = new User({ firstName, bodyPart, workouts });

    newUser.save()
        .then(user => {
            res.locals.user = user;
            return next();
        })
        .catch(err => {
          next({
            log: `Error creating user: ${err}` ,
            status: 500,
            message: { err: 'Error creating user' },
          });
        });
  },

  // get a user from the database and send it in the response
  // firstname will in request parameter 'firstName'
  // send the found student
  getUser(req, res, next) {
    const { firstName } = req.params;
    User.findOne({ firstName })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found'});
        }
        res.locals.user = user;
        return next();
      })
      .catch(err => {
        next({
          log: `Error getting user: ${err}` ,
          status: 500,
          message: { err: 'Error getting user' },
        });
      })
  },

  deleteUser(req, res, next) {
    const { firstName } = req.params;
    User.findOneAndDelete({ firstName })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found'});
        }
        return next();
      })
      .catch(err => {
        next(err); // Pass the error to the error handling middleware
      });
  }

}

module.exports = userController;