let Stack = require('./stack');

/* Made some mistakes with implementation need to correct it */

let StackNo = {one: 1, two: 2};

class QueueStack {
    constructor(n) {
        let stack1 = new Stack(n);
        let stack2 = new Stack(n);

        this.pushStack = function(item, stackNo) {
            if(stackNo === StackNo.one) {
                stack1.push(item);
            } else if (stackNo === StackNo.two) {
                stack2.push(item);
            } else {
                console.log('Invalid stack number');
            }
        };

        this.popStack = function(stackNo) {
            if(stackNo === StackNo.one) {
                return stack1.pop();
            } else if (stackNo === StackNo.two) {
                return stack2.pop();
            } else {
                console.log('Invalid stack number');
            }
        };

        this.isEmptyStack = function(stackNo) {
            if (stackNo === StackNo.one) {
                return stack1.isEmpty();
            } else {
                return stack2.isEmpty();
            }
        };

        this.isStackFull = function(stackNo) {
            if (stackNo === StackNo.one) {
                return stack1.isFull();
            } else {
                return stack2.isFull();
            }
        };

        this.displayQueues = () => {
            console.log('------------------------------------');
            console.log('Stack 1 = ' + JSON.stringify(stack1));
            console.log('Stack 2 = ' + JSON.stringify(stack2));
        }

    }

    transfer(){
        while(!this.isStackFull(StackNo.two)){
            if(!this.isEmptyStack(StackNo.one)) {
                let item = this.popStack(StackNo.one);
                this.pushStack(item, StackNo.two);
            } else {
                break;
            }
        }
    }

    enqueue(item) {
        if(!this.isStackFull(StackNo.one)){
            this.pushStack(item, StackNo.one);
        } else {
            if(!this.isStackFull(StackNo.two)) {
                this.transfer();
                if (!this.isStackFull(StackNo.one)) {
                    this.pushStack(item, StackNo.one);
                }
            }
        }
    }

    dequeue() {
        if (!this.isEmptyStack(StackNo.two)) {
            return this.popStack(StackNo.two);
        } else {
            if (this.isEmptyStack(StackNo.one)) {
                return 'Nothing to dequeue';
            } else {
                this.transfer();
                return this.popStack(StackNo.two);
            }
        }
    }
}

let queue = new QueueStack(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.displayQueues();
console.log('dequed element = ' + queue.dequeue());
console.log('dequed element = ' + queue.dequeue());
queue.displayQueues();
queue.enqueue(40);
queue.enqueue(50);
queue.displayQueues();
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
console.log('dequed element = ' + queue.dequeue());
console.log('dequed element = ' + queue.dequeue());
queue.displayQueues();
queue.enqueue(100);
queue.enqueue(110);
queue.enqueue(120);
queue.enqueue(130);
queue.enqueue(140);
queue.enqueue(140);
queue.displayQueues();



