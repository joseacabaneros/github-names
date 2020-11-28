import {expect} from 'chai'
import githubNames from '.'

describe('github-names', () => {
  it('should have a list of all available names', () => {
    expect(githubNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(githubNames.random()).to.satisfy(isIncludedIn(githubNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
