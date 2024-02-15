const User = require('./model/userModel.js')

const userController = {
  // Create a new user in the Database
  // Their information will be sent in the request body
  // This should send the created user
  createUser(req, res, next) {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return next({
          log: 'Error creating user',
          status: 500,
          message: {err: 'Error creating user'},
        });
      }
      else {
        res.status(200).json(student)
      }
    })


  },

}

module.exports = userController;