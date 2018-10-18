import moment from 'moment'
import { extend, getPrototypeOf } from '../helpers/index';

let eMonthNames = {
    eMonths: ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታሕሳስ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ'],
    eMonthsShort: ['መስ', 'ጥቅ', 'ኅዳ', 'ታሕ', 'ጥር', 'የካ', 'መጋ', 'ሚያ', 'ግን', 'ሰኔ', 'ሐም', 'ነሐ']
}

export default () => {
    extend(getPrototypeOf(moment.localeData()), {
        _eMonths: [
            'Meskerem',
            'Tikimt',
            'Hidar',
            'Tahsas',
            'Tir',
            'Yekatit',
            'Megabit',
            'Miyazya',
            'Ginbot',
            'Sene',
            'Hamle',
            'Nehase',
        ],

        eMonths: (moment) => this._eMonths[moment.eMonth()],

        _eMonthsShort: [
            'Mes',
            'Tik',
            'Hid',
            'Tah',
            'Tir',
            'Yek',
            'Meg',
            'Miy',
            'Gin',
            'Sen',
            'Ham',
            'Neh'
        ],

        eMonthsShort: (moment) => this._eMonthsShort[moment.eMonth()],

        eMonthsParse: (monthName) => {
            
        },

        eMonths: (m) => this._eMonths[m.eMonth()]
    })
    if(typeof moment.updateLocale == 'function') {
        moment.updateLocale('et', eMonthNames)
    } else {
        let oldLocale = moment.locale()
        moment.defineLocale('et', eMonthNames)
        moment.locale(oldLocale)
    }
}