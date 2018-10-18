import chai from 'chai'
import makeDateFromStringAndArray from './make-date-from-string-and-array';

let should = chai.should()

describe('make-date-from-string-and-array', () => {
    it('How to make date from string and array', () => {
        let date = makeDateFromStringAndArray({
            _f: ['eYYYY:eMM:eDD', 'eYY:eM:eD'],
            _i: [1985, 1, 24]
        })

        date.should.be.deep.equal([1992, 10, 4])
    })
})