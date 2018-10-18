export default (number, targetLength) => {
    let digits = number.toString().length
    if(targetLength - digits <= 0 || digits == targetLength) return number.toString()
    return Array(targetLength - digits)
        .fill(0).reduce((s, i) => '0' + s, number)
}