class Stack {
    constructor(n) {
        if (n) {
            this.arr = new Array(n);
            this.n = n;
        } else {
            this.arr = [];
            this.n = undefined;
        }

        this.top = -1;
    }

    push(item) {
        if (this.n) {
            if (this.top < this.n) {
                this.arr[++this.top] = item;
            } else {
                console.log('The stack is full');
            }
        } else {
            this.arr[++this.top] = item;
        }


    }

    pop () {
        if (this.top===-1) {
            return 'Nothing to pop';
        } else {
            return this.arr[this.top--];
        }
    }

    display() {
        return JSON.stringify(this.arr);
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        if(this.n) {
            return (this.top === (this.n-1));
        } else {
            return false;
        }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log('Stack Contents = ' + stack.display());
console.log('Element getting popped = ' + stack.pop());
console.log('Element getting popped = ' + stack.pop());
console.log('Element getting popped = ' + stack.pop());

module.exports = Stack;