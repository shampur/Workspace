class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    insert_node_back(data) {
        this.count++;
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            let root = this.root;
            while(root.next !== null) {
                root = root.next;
            }
            root.next = new Node(data);
        }
    }

    insert_node_front(data) {
        this.count++;
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            let node = new Node(data);
            node.next = this.root;
            this.root = node;
        }
    }

    insert_at_position_n(n, data){
        if((n > this.count + 1) && (n < 0)){
            console.log('Error!!! : Insert at positon ' + n + ' not possible.');
            return;
        } else {
            let node = new Node(data);
            if (n === 1) {
                node.next = this.root;
                this.root = node;
            } else if (n === this.count + 1) {
                let root = this.root;
                while(root.next !== null){
                    root = root.next;
                }
                root.next = node;
            } else {
                let root = this.root;
                for(let i=2; i<n; i++) {
                    root = root.next;
                }
                node.next = root.next;
                root.next = node;
            }
            this.count++;
        }
    }

    get_nodes() {
        let root = this.root;
        let arr = [];
        while(root !== null) {
            arr.push(root.data);
            root = root.next;
        }
        return arr;
    }

    traverse_forward_recurstion() {
        this.forward(this.root);
    }

    forward(root){
        if (root === null) {
            return;
        }
        console.log(root.data);
        return this.forward(root.next);
    }

    reverse_list_recursion() {
        this.root = this.reverse_rec(this.root, null);
        return this.get_nodes();
    }

    reverse_rec(root, prev) {
        if (root === null) {
            return prev;
        }
        let tempNext = root.next;
        root.next = prev;
        return this.reverse_rec(tempNext, root);
    }
}



let list = new LinkedList();
list.insert_node_back(10);
list.insert_node_back(20);
list.insert_node_back(30);
list.insert_node_back(40);
list.insert_at_position_n(3, 50);
let nodeList = list.get_nodes();
console.log('List of inserted nodes = ' + nodeList.toString());
console.log('No of inserted nodes = ' + list.count);
console.log('Print nodes using forward recursion = ');
list.traverse_forward_recurstion();
let reverseList = list.reverse_list_recursion();
console.log('List after reversing = ' + reverseList.toString());
module.exports = LinkedList;