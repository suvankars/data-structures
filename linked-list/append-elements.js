
class Node {
  // create a node with data and next pointer
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  //create a linked list with head and tail
  constructor(){
    this.head = {
      data: null,
      next: null
    }
    this.tail = null
  }

  prepend(data){
    // create a new node 
    const node = new Node(data[0])
    // this node became head of the linked list
    this.head = node;

    //it is also tail of the linked list
    this.tail = this.head;

    for(let i =1; i < data.length; i++){
      //1. Create Subsequent nodes
      const node = new Node(data[i]);
      //2. Point new nodes next to linked lists head's next 
      node.next = this.head;
      // Move head of the linked list to this node 
      this.head = node
    }
    return this;
  }

  append(data){
    const node = new Node(data);
  
      //Tail's pointer (ie. next) point to new node
      this.tail.next = node;
      //Update tail with new node
      this.tail = node;
    
    return this;
  }

  //Insert in a specific position
  insert(index, data){

  }

  display(head){
     if(head.next!== null) {
       this.display(head.next)
       process.stdout.write(head.data + " --> ")
    }
  }
}


const l = new LinkedList();
l.prepend([2,4,5, 6, 7,8]);
l.append(2)
l.insert(3, 99)
l.display(l.head);