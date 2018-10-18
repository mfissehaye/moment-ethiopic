import dateFromArray from '../parsing/date-from-array'
import getParseRegexForToken from '../helpers/get-parse-regex-for-token'
import {FORMATTING_TOKENS, FORMAT_TOKEN_FUNCTIONS} from '../parsing/constants'
import addDatePartToArrayFromToken from '../helpers/add-date-part-to-array-from-token'

export default (config) => {
    let tokens = config._f.match(FORMATTING_TOKENS)
    let string = config._i

    config._a = []

    tokens.forEach((token) => {
        let parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0]
        if(parsedInput) {
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length)
        }

        if(FORMAT_TOKEN_FUNCTIONS[token]) {
            addDatePartToArrayFromToken(token, parsedInput, config)
        }
    })

    if(string) {
        config._i1 = string
    }

    return dateFromArray(config)
}