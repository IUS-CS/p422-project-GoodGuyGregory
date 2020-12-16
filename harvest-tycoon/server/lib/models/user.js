const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const InboxSchema = mongoose.Schema({
  messages: [MessageSchema],
});

const PlantSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lifestage: {
    type: String,
    required: true
  },
  lightPreferences: {
    type: String,
    required: true
  },
  wateringPreferences: {
    type: String,
    required: true
  },
});

var gardenSchema = mongoose.Schema({
  plants: [PlantSchema],
});

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
  },
  inbox: {
    type: InboxSchema,
    default: {
      messages: [],
    }
  }

});

UserSchema.query.byName = function (name) {
  return this.where({ username: name });
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
