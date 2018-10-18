import {toEthiopic, toGregorian} from 'ethiopic-js'
import eMoment from '../../index'


export default (input) => {
    let lastDay, tw, gregorian
    if(typeof input === 'number') {
        e = toEthiopic(this.year(), this.month(), this.date())
        lastDay = Math.min(e.year, eMoment.eDaysInMonth(input, ))
    } else {
        return toEthiopic(this.year(), this.month(), this.date()).year
    }
}