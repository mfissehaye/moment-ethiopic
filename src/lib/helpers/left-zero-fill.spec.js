import chai from 'chai'
import leftZeroFill from './left-zero-fill'

let should = chai.should()

describe('left-zero-fill', () => {
    it('should fill proper number of zeros given length', () => {
        leftZeroFill(24, 4).should.be.equal('0024')
        leftZeroFill(24, 2).should.be.equal('24')
    })

    it('should leave the number untouched if number of digits is smaller than targetLength', () => {
        leftZeroFill(24, 1).should.be.equal('24')
    })
})