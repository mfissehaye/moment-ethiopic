export default (token, input, config) => {
    let a, datePartArray = config._a

    switch(token) {
        case 'eM':
        case 'eMM':
            datePartArray[1] = input == null ? 0 : ~~input
            break;
        
        case 'eMMM':
        case 'eMMMM':
            a = moment.localeData(config._l).eMonthsParse(input)
            if(a != null)
                datePartArray[1] = a
            else
                config._isValid = false
            break;

        case 'eD':
        case 'eDD':
        case 'eDDD':
        case 'eDDDD':
            if(input != null)
                datePartArray[2] = ~~input
            break;

        case 'eYY':
            datePartArray[0] = ~~input
            break

        case 'eYYYY':
        case 'eYYYYY':
            datePartArray[0] = ~~input
    }

    if(input == null)
        config._isValid = false
}