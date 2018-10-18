import moment from 'moment'
import * as constants from '../parsing/constants'

export default (token, config) => {
    switch(token) {
        case 'eDDDD':
            return constants.PARSE_TOKEN_THREE_DIGITS
        case 'eYYYY':
            return constants.PARSE_TOKEN_FOUR_DIGITS
        case 'eYYYYY':
            return constants.PARSE_TOKEN_SIX_DIGITS
        case 'eDDD':
            return constants.PARSE_TOKEN_ONE_TO_THREE_DIGITS
        case 'eMMM':
        case 'eMMMM':
            return constants.PARSE_TOKEN_WORD
        
        case 'eMM':
        case 'eDD':
        case 'eYY':
        case 'eM':
        case 'eD':
            return constants.PARSE_TOKEN_ONE_OR_TWO_DIGITS
        case 'DDDD':
            return constants.PARSE_TOKEN_THREE_DIGITS
        case 'YYYY':
            return constants.PARSE_TOKEN_FOUR_DIGITS
        case 'YYYYY':
            return constants.PARSE_TOKEN_SIX_DIGITS

        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return constants.PARSE_TOKEN_ONE_TO_THREE_DIGITS

        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return constants.PARSE_TOKEN_WORD
        
        case 'a':
        case 'A':
            return moment.localeData(config._l)._meridiemParse
        case 'X':
            return constants.PARSE_TOKEN_TIMESTAMP_MS
        case 'Z':
        case 'ZZ':
            return constants.PARSE_TOKEN_TIMEZONE
        case 'T':
            return constants.PARSE_TOKEN_T
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return constants.PARSE_TOKEN_ONE_OR_TWO_DIGITS
        default:
            return new RegExp(token.replace('\\', ''))
    }
}