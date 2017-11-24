/* function to return the next day */

Date.prototype.nextDay = function() {
    let newTime = this.getTime() + 86400000;
    return new Date(newTime);
};

let x = new Date();
console.log('Next day = ' + x.nextDay());
