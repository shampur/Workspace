/* Using memoization and recursion */
let fibonacciNUmber = (n) => {
    var fiboLookup = new Array(n + 1);
    fiboLookup.fill(-1);
    var fibo = (n, fiboLookup) => {
        if (n<=1) {
            fiboLookup[n] = n;
        } else {
            if (fiboLookup[n] === -1) {
                fiboLookup[n] = fibo(n-1, fiboLookup) + fibo(n-2, fiboLookup)
            }
        }
        return fiboLookup[n];
    };
    return fibo(n, fiboLookup);
};

console.log('Fibonacci series with dynamic programming = ' + fibonacciNUmber(3));

function fib(n) {
    var lookup = [];
    lookup[1] = 0;
    lookup[2] = 1;
    return (function fibo(n) {
        if (n<=2) {
            return lookup[n];
        } else {
            if (lookup[n] !== undefined) {
                console.log('not calculated');
                return lookup[n];
            } else {
                lookup[n] = fibo(n-1) + fibo(n-2);
                return lookup[n];
            }
        }
    })(n);
}

let x = fib(5);

console.log("Fibo of 5 = " + x);


