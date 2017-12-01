class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }

    push(item) {
        this.arr[++this.top] = item;
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
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log('Stack Contents = ' + stack.display());
console.log('Element getting popped = ' + stack.pop());
console.log('Element getting popped = ' + stack.pop());
console.log('Element getting popped = ' + stack.pop());