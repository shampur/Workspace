let reverse = (stack) => {
    if (stack.length !== 0) {
        let o = stack.pop();
        reverse(stack);
        pushItemToLast(stack, o);
    }

    function pushItemToLast (stack, item) {
        if (stack.length === 0) {
            stack.push(item);
        } else {
            let o = stack.pop();
            pushItemToLast(stack, item);
            stack.push(o);
        }
    };

};

let sortStackInPlace = (stack) => {
    if (stack.length !== 0) {
        
    }
};



let st = [15, 3, 10, 5];
reverse(st);
console.log('In place reverse of stack = ' + JSON.stringify(st));