import _ from 'lodash'
import moment from 'moment'
import makeDateFromStringAndArray from './make-date-from-string-and-array'
import makeDateFromStringAndFormat from './make-date-from-string-and-format'
import removeParsedTokens from '../parsing/remove-parsed-tokens'
import leftZeroFill from '../helpers/left-zero-fill'
import extend from '../helpers/extend'
import objectCreate from '../helpers/object-create'
import eMoment from '../../index'

export default (input, format, lang, utc) => {
    let config = {
        _i: input,
        _f: format,
        _l: lang
    },
    date, m, em

    if (format) {
        if (_.isArray(format)) {
            return makeDateFromStringAndArray(config, utc)
        } else {
            let date = makeDateFromStringAndFormat(config)
            removeParsedTokens(config)
            format = 'YYYY-MM-DD' + config.format
            input = leftZeroFill(date[0], 4)
        }
    }

    
    if (utc) {
        m = moment.utc(input, format, lang)
    } else {
        m = moment(input, format, lang)
    }

    if (config._isValid === false) {
        m._isValid = false
    }

    m._eDiff = config._eDiff || 0
    em = objectCreate(eMoment.fn)
    extend(em, m)
    return em
}