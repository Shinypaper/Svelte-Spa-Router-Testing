module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'svelte-test/transform'
  },
	moduleFileExtensions: ['js', 'svelte'],
	bail: false,
	verbose: false
}
