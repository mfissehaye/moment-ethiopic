import chai from 'chai'
import makeDateFromStringAndFormat from './make-date-from-string-and-format'

let should = chai.should()

describe('make-date-from-string-and-format', () => {
    it('can get date given string and ethiopic eYYYY:eM:eD format', () => {
        let date = makeDateFromStringAndFormat({
            _f: 'eYYYY:eM:eD',
            _i: '1985:1:24'
        })

        date.should.be.deep.equal([1992, 10, 4])
    })
})