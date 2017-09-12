const assert = require('assert');
const User = require('../src/user');

describe('Update records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

});
