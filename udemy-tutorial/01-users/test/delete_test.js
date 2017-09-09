const assert = require('assert');
const User = require('../src/user');

describe('Deleteing a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
      .then(() => done());
  });

  it('model instance remove', () => { //joe = new User

  });

  it('class method remove', () => { // const User

  });

  it('class method findAndRemove', () => {

  });

  it('class method findByIdAndRemove', () => {

  });
});
