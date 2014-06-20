define([
	'intern!object',
	'intern/chai!assert',
	'dojo/request/script',
	'dojo/errors/RequestTimeoutError',
	'dojo/errors/CancelError',
	'intern/dojo/domReady!'
], function (registerSuite, assert, script, RequestTimeoutError, CancelError) {
	/* global scriptLoad, myTasks */
	registerSuite({
		name: 'dojo/request/script',

		'load': function () {
			var def = this.async();

			script.get('/__services/request/script', {
				query: {
					scriptVar: 'scriptLoad'
				}
			}).then(
				def.callback(function () {
					assert.notTypeOf(scriptLoad, 'undefined');
					assert.strictEqual(scriptLoad, 'loaded');
				}),
				def.reject
			);
		},

		'checkString': function () {
			var def = this.async();

			script.get('/__services/request/script', {
				query: {
					checkString: 'myTasks'
				},
				checkString: 'myTasks'
			}).then(
				def.callback(function () {
					assert.notTypeOf(myTasks, 'undefined');
					assert.deepEqual(
						myTasks,
						[ 'Take out trash.', 'Do dishes.', 'Brush teeth.' ]
					);
				}),
				def.reject
			);
		},

		'jsonp': function () {
			var def = this.async();

			script.get('/__services/request/script', {
				query: { foo: 'bar' },
				jsonp: 'callback'
			}).then(
				def.callback(function (data) {
					assert.strictEqual(data.animalType, 'mammal');
				}),
				def.reject
			);
		},

		'jsonp timeout': function () {
			var def = this.async();

			script.get('/__services/request/script', {
				query: { delay: 3000 },
				timeout: 500,
				jsonp: 'callback'
			}).then(
				def.reject,
				def.callback(function (error) {
					assert.instanceOf(error, RequestTimeoutError);
				})
			);
		},

		'jsonp cancel': function () {
			var def = this.async();

			script.get('/__services/request/script', {
				query: { delay: 3000 },
				jsonp: 'callback'
			}).then(
				def.reject,
				def.callback(function (error) {
					assert.instanceOf(error, CancelError);
				})
			).cancel();
		}
	});
});