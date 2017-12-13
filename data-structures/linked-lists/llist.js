var LinkedList = (function( ListNode ) {
  'use strict';
  /**
   * LInked List Constructor
   */
  function LList( ) {
    this._head = new ListNode( 'head' );
  }

  /**
   * Public Methods
   */

  /**
   * Pushing new item to the tail of the list
   * 
   * @param {*} value
   * @return {}
   */
  LList.prototype.push = function( value ) {
    var currentNode = this._head;
    while( currentNode.next ) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode( value );
  };
  /**
   * Convert Linked list to string and get the string
   * string structure: {item1} -> {item2} -> ... -> {itemN}
   * 
   * @param {} value
   * @return {string}
   */
  LList.prototype.toString = function() {
    var s, currentNode;
    s = '';
    currentNode = this._head;
    currentNode = currentNode.next;
    while( currentNode && currentNode.next ) {
      s += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }
    s += currentNode ? currentNode.data : '';
    return s;
  };
  /**
   * Inserting new element after choosen element. 
   * Returns true if new elment was insert after choosen element
   * and false if choosen element is not found;
   * 
   * @param {*} newElement
   * @param {*} item
   * @return {Boolean}
   */
  LList.prototype.insertAfter = function( newElement, item ) {
    var currentNode, newNode;
    newNode = new ListNode( newElement );
    currentNode = find.call( this, item );
    if ( !currentNode ) return false; 
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return true;
  };
  /**
   * Private Methods
   */

  /**
   * Find Node by value
   *
   * @param {*} value
   * @return {ListNode}
   */
  function find( value ) {
    var currentNode = this._head;
    while( currentNode && currentNode.data !== value ) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  return LList;
})( ListNode );