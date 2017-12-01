class Queue {
    constructor() {
        this.arr = [];
        this.first = -1;
        this.last = -1;
    }

    enqueue(item) {
        this.arr[++this.last] = item;
    }

    dequeue() {
        if (this.last===-1 || (this.first === this.last)) {
            this.first = -1;
            this.last = -1;
            return 'Nothing to dequeue'
        } else {
            return this.arr[++this.first];
        }
    }

    display() {
        return JSON.stringify(this.arr);
    }

    isEmpty() {
        if (this.last===-1 || (this.first === this.last)) {
            return true;
        } else {
            return false;
        }
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log('Queue contents = ' + queue.display());
console.log('Element getting dequed = ' + queue.dequeue());
console.log('Element getting dequed = ' + queue.dequeue());
console.log('Element getting dequed = ' + queue.dequeue());
queue.enqueue(30);
queue.enqueue(40);
console.log('Queue contents = ' + queue.display());
console.log('Element getting dequed = ' + queue.dequeue());

module.exports = Queue;

