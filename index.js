#!/usr/bin/env node
"use strict";

const fs = require("fs");

const beautifyText = require("beautify-text");
const glob = require("glob");
const through2 = require("through2");

if (process.argv.length > 2) {
  process.argv
    .slice(2)
    .map((pattern) => glob.sync(pattern)) // Extract matched filenames
    .reduce((acc, curr) => acc.concat(curr)) // Concat all arrays into one
    // TODO: Deduplicate
    // .reduce((acc, curr) => acc.includes(curr) ? acc : acc.concat(curr))
    .forEach((filename) => {
      const fileReadStream = fs.createReadStream(filename);
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
  stream.pipe(beautify).pipe(process.stdout);
}
