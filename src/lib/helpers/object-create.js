export default (parent) => {
    function F() {

    }

    F.prototype = parent
    return new F()
}