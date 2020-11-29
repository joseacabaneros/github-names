# random-string-names
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][license]
[![semantic-release][semantic-release-badget]][semantic-release]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]

Generator for random strings.

## The problem

You're writing tests and need to come up with the name of your user stub. Why waste
time hard-coding `'John Doe'` again when you could use `'Count Dooku'` or
`'Qui-Gon Jinn'`? Using random string characters makes your tests much more interesting.

## This solution

This module has ~50 stings and exposes an API for you to get a random one every time you call it.

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should
be installed as one of your project's dependencies:

```
npm install --save random-strings-gen
```

Alternatively you can get the [UMD][umd] build which is also published to the npm
registry and is therefore available via [npmcdn.com][npmcdn]:

- [https://unpkg.com/browse/random-strings-gen@2.0.4/dist/index.umd.js][npmcdn-link]
- [https://unpkg.com/browse/random-strings-gen@2.0.4/dist/index.umd.min.js][npmcdn-min-link]

The UMD build exposes the module as a global called `gitHubNames` or as an unnamed
module for AMD/CommonJS (require it by its file path)

## Usage

```javascript
const gitHubNames = require('github-names') // CommonJS
console.log(gitHubNames.random()) // Han Solo
console.log(gitHubNames.random()) // Kit Fisto
// you can also get the full array on `gitHubNames.all`
```

## Inspiration

- [cat-names](https://github.com/sindresorhus/cat-names)
- [dog-names](https://github.com/sindresorhus/dog-names)

## Other Solutions

This is actually part of a course instructing people how to create open source
projects. So as a result there are dozens of copies of this module on npm. Good luck
finding the best :-)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/joseacabaneros"><img src="https://avatars3.githubusercontent.com/u/10746604?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jose Antonio Cabañeros</b></sub></a><br /><a href="https://github.com/joseacabaneros/github-names/commits?author=joseacabaneros" title="Code">💻</a> <a href="https://github.com/joseacabaneros/github-names/commits?author=joseacabaneros" title="Documentation">📖</a> <a href="https://github.com/joseacabaneros/github-names/pulls?q=is%3Apr+reviewed-by%3Ajoseacabaneros" title="Reviewed Pull Requests">👀</a> <a href="#tool-joseacabaneros" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## LICENSE

MIT

[build-badge]: https://img.shields.io/travis/joseacabaneros/github-names?style=flat-square
[build]: https://travis-ci.org/github/joseacabaneros/github-names
[coverage-badge]: https://img.shields.io/codecov/c/github/joseacabaneros/github-names?style=flat-square
[coverage]: https://codecov.io/gh/joseacabaneros/github-names
[version-badge]: https://img.shields.io/npm/v/random-strings-gen?style=flat-square
[package]: https://www.npmjs.com/package/random-strings-gen
[downloads-badge]: https://img.shields.io/npm/dy/random-strings-gen?style=flat-square
[npm-stat]: http://npm-stats.org/#/random-strings-gen
[license-badge]: https://img.shields.io/npm/l/random-strings-gen?style=flat-square
[license]: https://opensource.org/licenses/MIT
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/joseacabaneros/github-names/blob/master/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/joseacabaneros/github-names/blob/master/other/ROADMAP.md
[semantic-release-badget]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release

[umd]: https://github.com/umdjs/umd
[npmcdn]: https://npmcdn.com
[npmcdn-link]: https://unpkg.com/browse/random-strings-gen@2.0.4/dist/index.umd.js
[npmcdn-min-link]: https://unpkg.com/browse/random-strings-gen@2.0.4/dist/index.umd.min.js