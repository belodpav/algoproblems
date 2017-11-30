var deleteDuplicates = function(head) {
  if (!head) return head;
  var currentNode = head,
      nextNode = currentNode.next;
  while(nextNode) {
    if (currentNode.val === nextNode.val) {
      currentNode.next = nextNode.next;
    } else {
      currentNode = nextNode;
    }  
    nextNode = currentNode.next;
  }
  return head;
};