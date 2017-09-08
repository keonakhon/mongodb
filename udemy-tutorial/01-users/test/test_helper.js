const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/*before((done) => {
  mongoose.connect('mongodb://localhost/user_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warninng', error);
    });
});*/

before((done)=>{
  mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true })
    .then((db)=>done())
    .catch((err)=>done(err));
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test
    done();
  });
});
