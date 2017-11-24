/* This function only compares the objects that are created using
let x = Object.create(Object.prototype)
let x = new Object() or using
let x = {}
The "check" can be removed to use it on objects created using the function keyword.
 */

let compare = (obja, objb) => {
    /* check */
    if ((typeof obja !== 'object') && (typeof objb !== 'object')) {
        console.log('Inputs are not javascript object');
        return false;
    }

    for (let prop in obja) {
        if (obja.hasOwnProperty(prop)) {
            if (!objb.hasOwnProperty(prop)) {
                return false;
            }
            switch (typeof obja[prop]) {
                case 'object':
                    if (!compare(obja[prop], objb[prop])) {
                        return false;
                    }
                    break;
                case 'function':
                    if (obja[prop].toString() !== objb[prop].toString()) {
                        return false;
                    }
                    break;
                default:
                    if (obja[prop] !== objb[prop]) {
                        return false;
                    }
                    break;
            }
        }
    }

    for (let prop in objb) {
        if (objb.hasOwnProperty(prop)) {
            if (!obja.hasOwnProperty(prop)) {
                return false;
            }
        }
    }

    return true;
};

let x = {first: 'charan', last: 'shampur'};
let y = {first: 'charan', last: 'shampur', subject: 'maths'};
console.log (`The two objects ${JSON.stringify(x)} and ${JSON.stringify(y)} are equal = ${compare(x,y)}`);