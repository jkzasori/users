const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.connection
		.once('open', () => {done();})
		.on('error', (error) => {
			console.warn('Warning', error);
		});	
})




// we called a hook, hook is a function that will be executed before any test gets executed inside of our test suite
beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		// Ready to run the next test!
	done();
	});
});