import { Plant } from './plant';

const mongoose = require('mongoose');

var gardenSchema = mongoose.Schema({
  plants: [Plant],
})

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  age: Number,
  phone: String,
  garden: {
    type: gardenSchema,
    default: {
      plants: [],
    }
  }

});

UserSchema.query.byName = function (name) {
  return this.where({ username: name });
}


const User = mongoose.model('User', UserSchema);

module.exports = User;
