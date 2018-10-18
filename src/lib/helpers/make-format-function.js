export default (format) => {
    let array = format.match(parse.FORMATTING_TOKENS)
    let length = array.length
    let i

    array.forEach((element, index) => {
        if(parse.FORMAT_TOKEN_FUNCTIONS[element]) {
            array[index] = parse.FORMAT_TOKEN_FUNCTIONS[element]
        }
    })

    return (mom) => {
        let output = ''
        let appendToOutput = i => array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i]
        Array(length).fill().map((_, i) => appendToOutput(i))
        return output
    }
}