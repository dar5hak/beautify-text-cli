const test = require('ava');
const nixt = require('nixt');

test('stdin via pipe', () => {
	nixt()
		.run('echo "Hello world" | beautify')
		.stdout('“Hello world”');
});

test('interactive stdin', () => {
	nixt()
		.run('beautify')
		.stdin('"Hello world"')
		.stdout('“Hello world”');
});

test('single file', () => {
	nixt()
		.run('beautify test1.txt')
		.stdout('“Hello world”');
});

test('glob', () => {
	nixt()
		.run('beautify test*.txt')
		.stdout('“Hello world\nWait — ermm…”');
});
