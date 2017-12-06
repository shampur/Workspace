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

    lowest_common_ancestor(a, b) {
        /*
            Constraint here is that a < b always.
         */
        var lca = function(root) {
            if (a<=root.data && b>=root.data) {
                return root;
            } else {
                if (a < root.data && b < root.data) {
                    return lca(root.left);
                } else if (a > root.data && b > root.data) {
                    return lca(root.right);
                } else {
                    console.log('LCA Not found, chances are both the inputs or one of the imput is not part of the tree');
                    return null;
                }
            }
        };

        return lca(this.root);
    }

    maximum() {
        /*
            Find maximum in a Binary tree, for Binary search tree you can just traverse all the way to the rightmost node
            and return that node, But for just a Binary tree you need to visit all the nodes and print it out.
         */
        if (this.root === null){
            console.log('There are no elements in the tree');
            return null;
        } else {
            return (function maxTree(root) {
                if (root === null) {
                    return 0;
                } else {
                    let left = maxTree(root.left);
                    let right = maxTree(root.right);
                    let max = (left > right)? left: right;
                    max = (root.data > max) ? root.data: max;
                    return max;
                }
            })(this.root);
        }

    }

    checkIfBinaryOrNot() {
        return (function isBinaryUtil(root, max, min) {
            if (root==null) {
                return true;
            } else {
                if (root.data <= max && root.data >= min) {
                    let left = isBinaryUtil(root.left, root.data, min);
                    let right = isBinaryUtil(root.right, max, root.data);
                    return (left && right);
                } else {
                    return false;
                }
            }
        })(this.root, Number.MAX_VALUE, Number.MIN_VALUE);
    }

    distance_between_two_nodes(a, b) {
        let lca = this.lowest_common_ancestor(a, b);
        function distanceFromLcaToNode(lcaNode, a, dist) {
            if (lcaNode === null) {
                /* This case will not occur because the existence of both the nodes is already established*/
                return -1;
            } else {
                if (lcaNode.data === a) {
                    return dist;
                } else if (a < lcaNode.data) {
                    return distanceFromLcaToNode(lcaNode.left, a, dist + 1);
                } else {
                    return distanceFromLcaToNode(lcaNode.right, a, dist + 1);
                }
            }
        }
        let x = distanceFromLcaToNode(lca, a, 0);
        let y = distanceFromLcaToNode(lca, b, 0);
        return x + y;
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
tree.insert_node(8);
tree.insert_node(15);
tree.insert_node(12);
inorderArray = tree.get_inorder();
console.log('Height of the tree = ' + tree.getHeightOfTree());
console.log('Inorder traversal of the BST = ' + inorderArray.toString());
console.log('LCA of the two nodes 12 and 1 = ' + tree.lowest_common_ancestor(1, 12).data);
console.log('Maximum element in the tree = ' + tree.maximum());
console.log('Is it a binary tree = ' + tree.checkIfBinaryOrNot());
console.log('Distance between two nodes 8 and 2 = ' + tree.distance_between_two_nodes(2, 8));
console.log('Distance between two nodes 12 and 1 = ' + tree.distance_between_two_nodes(1, 12));
module.exports = Tree;