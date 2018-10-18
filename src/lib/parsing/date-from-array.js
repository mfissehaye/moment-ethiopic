import {toEthiopic, toGregorian, isValidEthiopicDate} from 'ethiopic-js'

export default (config) => {
    let g, h, 
        ey = config._a[0],
        em = config._a[1],
        ed = config._a[2]

    if((ey == null) && (em == null) && (ed == null)) {
        return [0, 0, 1]
    }

    ey = ey || 0
    em = em || 0
    ed = ed || 0
    if(! isValidEthiopicDate(ey, em, ed))
        config._isValid = false

    return toGregorian(ey, em, ed)
}