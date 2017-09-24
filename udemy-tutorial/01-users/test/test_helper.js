const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//before test sample 1
/*before((done) => {
  mongoose.connect('mongodb://localhost/user_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warninng', error);
    });
});*/

//before test sample 2 (almost same result as above)
before((done)=>{
  mongoose.connect('mongodb://localhost/users_test', { useMongoClient: true })
    .then((db)=>done())
    .catch((err)=>done(err));
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    const { users, blogposts, comments } = mongoose.connection.collections;
    users.drop(() => {
      comments.drop(() => {
        blogposts.drop(() => {
          done();
        });
      });
    });
  });
});
