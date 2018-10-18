export default (object) => {
    if(Object.getPrototypeOf)
        return Object.getPrototypeOf(object)
    else if(''.__proto__)
        return object.__proto__
    else
        return object.constructor.prototype
}