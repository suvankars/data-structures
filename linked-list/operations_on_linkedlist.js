class LinkedList{
  constructor(){
    this.head = {
      data: null,
      next: null
    }
    this.tail = null
  }

  prepend(data){
    const node = new Node(data[0])
    this.head = node;
    this.tail = this.head;

    for(let i =1; i < data.length; i++){
      const node = new Node(data[i]);
      node.next = this.head;
      this.head = node
    }
    return this;
  }

  append(data){
    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  insert(index, data){
    if (index > this.size(this.head)){
      return this.append(data)
    }

    let i = 0
    let head = this.head;
    if(head && head.next === null){ return this}
    while(i!==index-1){
      head = head.next;
      i++
    }

    let node = new Node(data)
    node.next = head.next;
    head.next = node;

    return this;
  }

  delete(index){
    if (index >= this.size(this.head)){
      console.log("Not found in the list");
      return;
    }

    if (index === 0){
      let nodeToDelete = this.head;
      this.head = nodeToDelete.next;
      nodeToDelete = null;
      return nodeToDelete;
    }

    let counter =0;
    let lead = this.head
    while (index-1 != counter ){
      counter++
      lead = lead.next
    }

    const nodeToDelete = lead.next;
    lead.next = nodeToDelete.next;

    return nodeToDelete;
  }

  size(head){
    if(head != null){
      return this.size(head.next) + 1
    } else {
      return 0;
    }
  }

  sum(temp){
    if(temp != null){
      return this.sum(temp.next) + temp.data
    } else {
      return 0;
    }
  }

  max(temp){
    let max = 0;
    if( temp != null){
      max = this.max(temp.next)
      return max>temp.data ? max : temp.data
    } else {
      return max;
    }
  }
  display(head){
     if(head.next!= null) {
       process.stdout.write(head.data + " --> ")
       this.display(head.next)

    } else {
      process.stdout.write(head.data + " --> " + "NULL\n")
    }
  }

  search(temp, elm){
    while(temp != null){
      if(temp.data === elm){
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  r_search(temp, key){
    if(temp === null){
      return null;
    }

    if(temp.data === key){
      return temp;
    }

    return this.r_search(temp.next, key)
  }

  sort(temp){
    let nextNode = temp.next;
    let prevNode = temp;
    let swaped = false
    //while(swaped === false){
      //console.log(prevNode.data)
      while(nextNode != null ){

         if(prevNode.data > nextNode.data){
           console.log(prevNode.data, nextNode.data)

           prevNode.next = nextNode.next;
           nextNode.next = prevNode;
           //this.head = secondNodeToSwap;

          //swaped = true;
        }
        //console.log(temp)
        nextNode = nextNode.next;
        prevNode = prevNode.next;
      }
      // if(swaped === true){
      //   console.log("sorted")
      //   return this;
      // }
    //}
    //return this;
  }

  reverse(){
    let prev = this.head
    let nodeToReverse = null;
    let next = null;

    while(prev != null){
      next = nodeToReverse;
      nodeToReverse = prev;
      prev = prev.next;

      nodeToReverse.next = next;
    }
    let head = this.head;
    this.head = this.tail;
    this.tail = head;
  }

  r_reverse(p, q){
    if(p != null){
      this.r_reverse(p.next, p)
      p.next = q;
    } else {
      this.head = q
    }
  }
}

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

const l = new LinkedList();
l.prepend([2,7,8,4,5,10, 78]);
l.append(89)
//l.insert(3,91)
console.log(l.delete(1))
l.display(l.head);
console.log("Size of the list is now: " + l.size(l.head))
console.log("Sum of all the elements  in that list is: ", l.sum(l.head))
console.log("Highest element in that list is: ", l.max(l.head))
//console.log(" Search element: ", l.r_search(l.head, 25))
//console.log(" Search element:", l.search(l.head, 5))
l.display(l.head);
//console.log("insert element in sorted list:", l.sort(l.head))
//l.display(l.head);
console.log("Reserse elements in the list:", l.reverse())
l.display(l.head);
console.log("recursive Reserse elements in the list:", l.r_reverse( l.head, null))
l.display(l.head);
