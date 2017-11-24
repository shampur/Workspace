// Heapify function to build max heap
let heapify = (a, n, i) => {
    let leftChild = (2 * i) + 1;
    let rightChild = (2 * i) + 2;
    let largest = i;
    if (leftChild < n && a[leftChild] > a[largest]) {
        largest = leftChild;
    }
    if (rightChild < n && a[rightChild] > a[largest]) {
        largest = rightChild;
    }
    if(largest != i) {
        swap(a, i, largest);
        heapify(a, n, largest);
    }
};

let swap = (a, b, c) => {
    let temp = a[b];
    a[b] = a[c];
    a[c] = temp;
};

let heapSort = (b) => {
    // Construct the heap
    if ((typeof(b) === 'object') && (b !== undefined) && (b !== null) && (b.length > 0)) {
        let a = b.slice();
        let n = a.length;
        for (let i = Math.floor((n/2) - 1); i >= 0 ; i--) {
            heapify(a, n, i);
        }
        for (i=n-1; i >= 0; i--) {
            swap(a, i, 0);
            heapify(a, i, 0);
        }
        return a;
    }
    return b;
};


let a = [5, 20, 8, 4, 30, 1];
let b = heapSort(a);
console.log('The sorted array [5, 20, 8, 4, 30, 1] is = ' + b.toString());
module.exports = heapSort;
