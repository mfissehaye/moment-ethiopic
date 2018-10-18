import moment from 'moment'
import {extend, objectCreate} from './lib/helpers'
import {makeMoment} from './lib/create'
import updateLocale from './lib/i18n/locale'

let eMoment = (input, format, lang) => {
    return makeMoment(input, format, lang, false)
}

extend(eMoment, moment)
eMoment.fn = objectCreate(moment.fn)
eMoment.utc = (input, format, lang) => {
    return makeMoment(input, format, lang, true)
},

updateLocale()

export default eMoment