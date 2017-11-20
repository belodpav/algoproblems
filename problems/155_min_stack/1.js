/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
    this.minStack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    if (x <= this.minStack[this.minStack.length - 1]) this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var d = this.data.pop();
  if (d === this.minStack[this.minStack.length - 1]) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.length > 1 ? this.minStack[this.minStack.length - 1] : 0;
};
