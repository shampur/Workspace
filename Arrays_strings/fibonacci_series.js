
let fibo = (n) => {
    if (n <= 1) return 0;
    if (n == 2) return 1;
    return fibo(n-1) + fibo(n-2);
};


let fibo_series = (n) => {
    if (n==1) {
        console.log(0);
        return
    }
    if (n==2) {
        console.log(1);
        return;
    }
    let fib1 = 0, fib2 = 1;
    console.log(fib1);
    console.log(fib2);
    for (let i = 0; i < n-2; i++) {
        let fibi = fib1 + fib2;
        console.log(fibi);
        fib1=fib2;
        fib2=fibi;
    }

};

console.log('The fibonacci series of 6 = ');
fibo_series(6);

console.log('The 6th fibonacci number = ' + fibo(6));