import uniqueRandomArray from 'unique-random-array'
const githubNames = require('./github-names.json')

const mainExport = {
  all: githubNames,
  random: uniqueRandomArray(githubNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
