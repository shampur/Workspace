var gcd = (a, b) => {
    let x;
    let p, q;
    if (a < b ) {
        p = b;
        q = a;

    } else {
        p = a;
        q = b;
    }
    x = p % q;
    if (x === 0) {
        return q;
    } else {
        return gcd(x, q);
    }
};

console.log("The gcd of 35 and 60 is = " + gcd(35, 60));