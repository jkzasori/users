const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () =>{
		let joe;

	beforeEach((done) => {
    joe = new User({ name: 'Jose' });
    joe.save()
      .then(() => done());
  });
	
	 it('model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ name: 'Jose' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

		it('modal method remove', (done) => {
				// Remove a bunch of records with some given criteria
    User.remove({ name: 'Jose' })
      .then(() => User.findOne({ name: 'Jose' }))
      .then((user) => {
        assert(user === null);
        done();
      });
		});
		
		it('Class method findAndRemove', (done) => {
			User.findOneAndRemove({ name: 'Jose' })
			.then(() => User.findOne({ name: 'Jose' }))
      .then((user) => {
        assert(user === null);
        done();
      });
		});

		it('Class method findByIDRemove', (done) => {
			 User.findByIdAndRemove(joe._id)
      .then(() => User.findOne({ name: 'Jose' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

});

