const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://herreraanthony2:pOQN2b1E5E2PbVZ8@users.wszkqhb.mongodb.net/';

// username: herreraanthony2
// password: pOQN2b1E5E2PbVZ8

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'PT-Users'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    firstName: { type: String, required: true },
    lasName: { type: String, required: true },
    bodyPart: { type: String, required: true },
    workouts: [
      {
        name: { type: String, required: true },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true },
        // Add more properties as needed
      },
    ]
  })

const User = mongoose.model('user', userSchema);

module.exports = User;