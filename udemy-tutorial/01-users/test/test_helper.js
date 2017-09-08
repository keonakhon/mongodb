const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/user_test');
mongoose.connection
  .once('open', () => {})
  .on('error', (error) => {
    console.warn('Warninng', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test
    done();
  });
});
