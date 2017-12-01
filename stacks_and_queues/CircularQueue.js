class CircularQueue {
    constructor() {
        this.arr = new Array(6);
        this.first = -1;
        this.last = -1;
    }

    enqueue(item) {
        if (this.first === -1 && this.last === -1) {
            this.arr[0] = item;
            this.first = 0;
            this.last = 0;
        } else {
            if((this.first === 0) && (this.last === this.arr.length - 1)){
                return 'Queue full';
            } else if ((this.last + 1) === this.first) {
                return 'Queue full'
            } else if (this.last === this.arr.length - 1){
                this.last = 0;
                this.arr[this.last] = item;
            } else {
                this.arr[++this.last] = item;
            }

        }
    }

    dequeue() {
        if (this.first === -1 && this.last === -1) {
            return 'Queue empty'
        } else {
            if(this.first === this.last) {
                let item = this.arr[this.first];
                this.first = -1;
                this.last = -1;
                return item;
            } else if (this.first === this.arr.length - 1) {
                let item = this.arr[this.first];
                this.first = 0;
                return item;
            } else {
                return this.arr[this.first++];
            }
        }
    }

    display() {
        let dispArr = [];
        if (this.first === -1 && this.last === -1) {
            return JSON.stringify(dispArr);
        } else {
            if (this.first <= this.last) {
                for(let i = this.first ; i <= this.last; i++) {
                    dispArr.push(this.arr[i]);
                }
                return JSON.stringify(dispArr);
            } else {
                for(let i = this.first; i < this.arr.length; i++) {
                    dispArr.push(this.arr[i]);
                }
                for(let i = 0; i <= this.last ; i++) {
                    dispArr.push(this.arr[i]);
                }
                return JSON.stringify(dispArr);
            }
        }

    }
}

let circularQueue = new CircularQueue();
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
console.log('Current state of queue = '+ circularQueue.display());
console.log('Element getting dequed = '+ circularQueue.dequeue());
console.log('Element getting dequed = '+ circularQueue.dequeue());
circularQueue.enqueue(40);
console.log('Current state of queue = '+ circularQueue.display());
circularQueue.enqueue(50);
circularQueue.enqueue(60);
console.log('Current state of queue = '+ circularQueue.display());
circularQueue.enqueue(70);
circularQueue.enqueue(80);
console.log(circularQueue.enqueue(90));
console.log('Current state of queue = '+ circularQueue.display());
console.log('first = '+ circularQueue.first + ' last = ' + circularQueue.last);


