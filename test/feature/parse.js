import http from 'http'
import assert from 'assert'
import chai from 'chai'
import moment from '../../src/index'

const should = chai.should()

// describe('moment-ethiopic', () => {
//     describe('#parse', () => {
//         it('should parse gregorian dates', () => {
//             let m = moment('1981/8/17 07:10:20', 'YYYY/M/D hh:mm:ss')
//             m.format('YYYY-MM-DD hh:mm:ss').should.be.equal('1981-08-17 07:10:20')
//             m.milliseconds().should.be.equal(0)
//         })

//         it('should parse correctly when input is only time', () => {
//             let m = moment('07:10:20', 'hh:mm:ss')
//             m.format('hh:mm:ss').should.be.equal('07:10:20')
//         })

//         it('should parse when only ethiopic year is in the format', () => {
//             let m = moment('10 1985 04', 'MM eYYYY DD')
//             m.format('YYYY-MM-DD').should.be.equal('1992-10-04')

//             m = moment('10 85 04', 'MM eYY DD')
//             m.format('YYYY-MM-DD').should.be.equal('1992-10-04')
//         })
//     })
// })