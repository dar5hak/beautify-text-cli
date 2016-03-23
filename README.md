# beautify-text-cli
> Automated typographic quotation and punctuation marks. CLI for [bevacqua/beautify-text](https://github.com/bevacqua/beautify-text).

[![circleci build](https://img.shields.io/circleci/project/dar5hak/beautify-text-cli.svg?style=flat-square)](https://circleci.com/gh/dar5hak/beautify-text-cli)
[![npm version](https://img.shields.io/npm/v/beautify-text-cli.svg?style=flat-square)](https://www.npmjs.com/package/beautify-text-cli)
[![license](https://img.shields.io/npm/l/beautify-text-cli.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0)

## Install

```sh
$ npm install --global beautify-text-cli
```

## Usage

Input text via stdin or files. See output on stdout.

```sh
$ # Piping
$ echo '"Hello world"' | beautify
“Hello world”

$ # Interactive stdin
$ beautify
"Hello world"
“Hello world”

$ # Files
$ beautify files/*.txt >> combined.txt
```

## Features

Prettifies several typographic marks, some cases are outlined below.

- Single and double quotes
- Apostrophes
- Marks like `(tm)`, `(c)`, `(r)` and `(p)` into `™`, `©`, `®` and `§`
- Long dashes, like `---` into `—`
- `..`, `...`, etc into `…` (but `?..`, `!..` aren't transformed)
- `+-` into `±`

## License

MIT © [Darshak Parikh](https://github.com/dar5hak)
