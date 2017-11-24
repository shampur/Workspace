class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert_node(data) {
        this.root = this.insert(this.root, data);
    }

    insert(root, data) {
        if (root === null) {
            root = new Node(data, null, null);
        } else {
            if (data <= root.data) {
                root.left = this.insert(root.left, data);
            } else {
                root.right = this.insert(root.right, data);
            }
        }
        return root
    }

    delete_node(data) {
        this.root = this.delete(this.root, data);
    }

    delete(root, data) {
        if (root !== null) {
            if (root.data === data) {
                if((root.left === null) && (root.right === null)){
                    return null;
                } else {
                    if (root.left === null) {
                        return root.right;
                    } else if (root.right === null) {
                        return root.left;
                    } else {
                        let p = root.right;
                        let p2 = root.right;
                        while(p.left !== null) {
                            p = p.left;
                        }
                        p.left = root.left;
                        return p2;
                    }
                }
            } else {
                if (data < root.data) {
                    root.left = delete(root.left)
                } else {
                    root.right = delete(root.right);
                }
                return root;
            }
        }
    }

    get_inorder() {
        let  treeArray = [];
        this.inorder(this.root, treeArray);
        return treeArray;
    }

    inorder(root, treeArray) {
        if (root !== null){
            this.inorder(root.left, treeArray);
            treeArray.push(root.data);
            this.inorder(root.right, treeArray);
        }
    }

    getHeightOfTree() {
        let h = this.height(this.root);
        return h;
    }

    height(root) {
        if(root === null) {
            return -1;
        } else {
            let left = 1 + this.height(root.left);
            let right = 1 + this.height(root.right);
            return (left > right)? left:right;
        }
    }

    create_tree(elements) {
        for(let item of elements) {
            this.insert_node(item);
        }
    }
}

let tree = new Tree();
tree.insert_node(10);
tree.insert_node(20);
tree.insert_node(5);
let inorderArray = tree.get_inorder();
console.log('Inorder traversal of the BST = ' + inorderArray.toString());
tree.delete_node(10);
console.log('Tree after deleting 10 = ' + tree.get_inorder().toString());
tree.insert_node(10);
tree.insert_node(22);
tree.insert_node(3);
tree.insert_node(2);
tree.insert_node(1);
console.log('Height of the tree = ' + tree.getHeightOfTree());
module.exports = Tree;