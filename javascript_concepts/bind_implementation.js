function add(c, d) {
    return this.a + this.b + c + d;
}

var obj = {a: 1, b: 2};
var a = 10;
var b = 20;

function bind1(obj) {
    var that = this;
    return function () {
        var argList = Array.prototype.slice.call(arguments, 0);
        return that.apply(obj, argList);
    }
}

function call1(obj, ...args) {
    var that = this;
    return (function() {
        var argList = args.slice(0);
        return that.apply(obj, argList);
    })();
}

Function.prototype.bind1 = bind1;
Function.prototype.call1 = call1;

let x = add.bind1(obj)(5,6);
console.log('Custom bind function = ' + x);
console.log('Custom call function = ' + add.call1(obj, 5, 6));