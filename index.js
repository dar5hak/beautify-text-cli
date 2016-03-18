'use strict';

const beautifyText = require('beautify-text');
const fs = require('fs');
const glob = require('glob');
const R = require('ramda');
const through2 = require('through2');

if (process.argv.length > 2) {
	process.argv
		.slice(2)
		.map(pattern => glob.sync(pattern)) // extract matched filenames
		.reduce((acc, curr) => acc.concat(curr)) // concat all arrays into one
		// TODO: Deduplicate
		// .reduce((acc, curr) => acc.includes(curr) ? acc : acc.concat(curr))
		.forEach((filename) => {
			let fileReadStream = fs.createReadStream(filename);
			beautifyStream(fileReadStream);
		});
} else {
	beautifyStream(process.stdin);
}

function beautifyStream(stream) {
	const beautify = through2(function (chunk, enc, callback) {
		this.push(beautifyText(chunk.toString()));
		callback();
	});
	stream
		.pipe(beautify)
		.pipe(process.stdout);
}
