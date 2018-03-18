const assert = require('assert');
const User = require('../src/user');


describe('Creating records', () => {
	it('saves a user', (done) => {
		const joe = new User({name: 'Jose'});

		joe.save()
		.then(() => {
			// has joe been saved succeddfully?
			assert(!joe.isNew);
			done();
		})
	})
});

