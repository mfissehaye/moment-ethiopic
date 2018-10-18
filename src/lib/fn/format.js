import parse from "../parse";
import moment from 'moment'
import makeFormatFunction from '../helpers'

export default (format) => {
    let me = this
    if(format) {
        i = 5
        let replace = (input) => me.localeData().longDateFormat(input) || input

        while(i > 0 && parse.LOCAL_FORMATTING_TOKENS.test(format)) {
            i -= 1
            format = format.replace(LOCAL_FORMATTING_TOKENS, replace)
        }

        if(!parse.FORMAT_FUNCTIONS[format]) {
            parse.FORMAT_FUNCTIONS[format] = makeFormatFunction(format)
        }

        format = parse.FORMAT_FUNCTIONS[format](this)
    }

    return moment.fn.format.call(this, format)
}