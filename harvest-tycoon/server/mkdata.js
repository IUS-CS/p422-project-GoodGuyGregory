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
const testUser2 = new User({
  username: 'test-user-2',
  password: 'password',
  email: 'test2@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});

const testUser3 = new User({
  username: 'test-user-3',
  password: 'password',
  email: 'test3@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});
const testUser4 = new User({
  username: 'test-user-4',
  password: 'password',
  email: 'test4@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});
const testUser5 = new User({
  username: 'test-user-5',
  password: 'password',
  email: 'test5@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});
const testUser6 = new User({
  username: 'test-user-6',
  password: 'password',
  email: 'test6@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});
const testUser7 = new User({
  username: 'test-user-7',
  password: 'password',
  email: 'test7@test.com',
  firstName: 'Tester',
  lastName: 'McTesting',
  age: 60,
  phone: '502-554-2305',
  garden: {
    plants: []
  }

});
const testUser8 = new User({
  username: 'test-user-8',
  password: 'password',
  email: 'test8@test.com',
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
  await User.deleteMany();

  testUser1.save();
  testUser2.save();
  testUser3.save();
  testUser4.save();
  testUser5.save();
  testUser6.save();
  testUser7.save();
  testUser8.save();

}

save().then(() => console.log('done'));
