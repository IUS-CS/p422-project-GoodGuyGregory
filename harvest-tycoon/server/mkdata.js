const mongoose = require('mongoose');
const User = require('./lib/models/user');
// const Plant = require('./lib/models/plant');

const testUser1 = new User({
  username: 'test-user',
  password: 'password',
  email: 'test@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});


mongoose.connect('mongodb://localhost:27017/harvest-tycoon', { useNewUrlParser: true, useUnifiedTopology: true });

//  clear the DB 
async function save() {

  // save course data to the db 
  await testUser1.save();
}

save().then(() => console.log('done'));