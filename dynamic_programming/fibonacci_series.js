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