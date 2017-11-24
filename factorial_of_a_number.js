let fact = (n, acc=1) => {
    if (n<=1) {
        return acc;
    } else {
        return fact(n-1, n * acc);
    }
};

console.log("Factorial of 5 = " + fact(5));
module.exports = fact;
