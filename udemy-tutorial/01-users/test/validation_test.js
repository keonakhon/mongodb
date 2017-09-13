const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('require a user name', () => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    //ES5 const message = validationResult.errors.name.message;
    const { message } = validationResult.errors.name; //ES6

    assert(message === 'Name is required.');
  });
});
