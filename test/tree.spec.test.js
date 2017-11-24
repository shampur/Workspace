let expect = require('chai').expect;
let Tree = require('../trees/tree');
let tree = new Tree();

describe('Binary search tree', () => {
    it('should create a binary search tree', () => {
        tree.create_tree([10,5,20,30,1,2]);
        let x = tree.get_inorder();
        expect(x).to.deep.equal([1,2,5,10,20,30]);
    });

    it('should delete an item from the tree', () => {
        tree.delete_node(10);
        let x = tree.get_inorder();
        expect(x).to.deep.equal([1,2,5,20,30]);
    });

    it('should be able to determine the height of the tree', () => {
        let h = tree.getHeightOfTree();
        expect(h).to.equal(3);
    });
});