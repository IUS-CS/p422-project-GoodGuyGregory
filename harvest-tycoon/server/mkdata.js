const mongoose = require('mongoose');
const User = require('./lib/models/user');
// const Plant = require('./lib/models/plant');


mongoose.connect('mongodb://localhost:27017/harvest-tycoon', { useNewUrlParser: true, useUnifiedTopology: true });

//  clear the DB 
async function save() {

  // save course data to the db 
  await User.deleteMany();


}

save().then(() => console.log('done'));
