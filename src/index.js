import uniqueRandomArray from 'unique-random-array'
const githubNames = require('./github-names.json')

const mainExport = {
  all: githubNames, // all
  random: uniqueRandomArray(githubNames), // random
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
