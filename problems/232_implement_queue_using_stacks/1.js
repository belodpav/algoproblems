/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this._data = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this._data.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  var x = this._data[0];
  this._data = this._data.slice(1);
  return x;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  var x = this._data[0];
  return x;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this._data.length ? false : true;
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */