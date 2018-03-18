const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
	let joe;
	beforeEach((done) => {
		joe = new User({ name: 'Jose' });
		joe.save()
			.then(() => done());
	});

	function assertName(operation, done) {
		operation
			.then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Lucy');
        done();
			});
	}

	it('instnce type using set n save', (done) =>{
		joe.set('name', 'Lucy');
		assertName(joe.save(), done);
			
	});

	it('A model instance can update', (done) => {
		assertName(joe.update({ name: 'Lucy'}), done);
	});

	it('A model class can update', (done) => {
		assertName(
			User.update({ name: 'Jose'}, { name: 'Lucy' }),
			done
			);
	});

	it('A model class can update one record', (done) => {
		assertName(
			User.findOneAndUpdate({name: 'Jose'}, {name: 'Lucy'}),
			done
			);
	})

	it('A model class can find a record with an Id and update', (done) => {
		assertName(
			User.findByIdAndUpdate(joe._id, { name: 'Lucy'}),
			done
			);
	})

})