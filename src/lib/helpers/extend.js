export default (a, b) => {
    for(let key in b) {
        if(b.hasOwnProperty(key)) {
            a[key] = b[key]
        }
    }

    return a
}