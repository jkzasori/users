const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
	let joe;

	beforeEach((done) => {
		joe = new User ({ name: 'Jose' });
		joe.save()
			.then(() => done());
	});

	it('finds all user with name jose', (done) => {
		User.find({ name: 'Jose' })
			.then((users) => {
				assert(users[0]._id.toString() === joe.id.toString());
				done();
			});
	});

	it('Find a user with a particular ID', (done) => {
		User.findOne({ _id: joe._id })
			.then((user) =>{
				assert(user.name === 'Jose');
				done();
			});
	});

});