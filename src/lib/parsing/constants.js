import { leftZeroFill } from "../helpers/left-zero-fill";

export const FORMATTING_TOKENS = /(\[[^\[]*\])|(\\)?e(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
localFormattingTokens = /(\[[^\[]*\])|(\\)?(iLL?L?L?|LTS|LT|LL?L?L?|i?l{1,4})/g
//var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|tYY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|tYY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
export const LOCAL_FORMATTING_TOKENS = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g

export const PARSE_TOKEN_ONE_OR_TWO_DIGITS = /\d\d?/
export const PARSE_TOKEN_ONE_TO_THREE_DIGITS = /\d{1,3}/
export const PARSE_TOKEN_THREE_DIGITS = /\d{3}/
export const PARSE_TOKEN_FOUR_DIGITS = /\d{1,4}/
export const PARSE_TOKEN_SIX_DIGITS = /[+\-]?\d{1,6}/
export const PARSE_TOKEN_WORD = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
export const PARSE_TOKEN_TIMEZONE = /Z|[\+\-]\d\d:?\d\d/i
export const PARSE_TOKEN_T = /T/i
export const PARSE_TOKEN_TIMESTAMP_MS = /[\+\-]?\d+(\.\d{1,3})?/
export const FORMAT_TOKEN_FUNCTIONS = {
    eM: () => this.eMonth() + 1,
    eMMM: (format) => this.localeData().eMonthsShort(this, format),
    eMMMM: (format) => this.localeData().eMonths(this, format),
    eD: () => this.eDate(),
    eDDD: () => this.eDayOfYear(),
    ew: () => this.eWeek(),
    eYY: () => leftZeroFill(this.eYear() % 100, 2),
    eYYYY: () => leftZeroFill(this.eYear(), 4),
    eYYYYY: () => leftZeroFill(this.eYear(), 5),
    egg: () => leftZeroFill(this.eWeekYear() % 100, 2),
    egggg: () => this.eWeekYear(),
    eggggg: () => leftZeroFill(this.eWeekYear(), 5)
}
export const FORMAT_FUNCTIONS = {}