/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
    Here l1 and l2 would be two linekd Lists.
 */
var addTwoNumbers = function(l1, l2) {
    var num1 = getNumbers(l1);
    var num2 = getNumbers(l2);
    var sum = (Number(num1) + Number(num2)).toString();
    var nextNode = new ListNode(Number(sum[0]));
    if(Number(sum) < 10){
        return nextNode;
    }
    var prevNode = undefined;
    for(var i=1; i<sum.length; i++) {
        prevNode = new ListNode(Number(sum[i]));
        prevNode.next = nextNode;
        nextNode = prevNode;
    }
    return prevNode;
};

var getNumbers = function(link1) {
    if(link1.next === null) {
        return link1.val;
    } else {
        return (getNumbers(link1.next).toString() + link1.val.toString());
    }
}