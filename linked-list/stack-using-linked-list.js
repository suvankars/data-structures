class Node {
  constructor(data){
    this.data = data,
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  display(head){
    if(head.next ===   null){
      process.stdout.write(head.data + "-->" + "null\n")
    } else {
      process.stdout.write(head.data + "-->")
      return this.display(head.next)
    }
  }

  push(data){
    let new_node = new Node(data);

    if (new_node === null){
      console.log("stack overflow")
    } else {
      new_node.next = this.top;
      this.top = new_node;
    }
  }

  pop(){
    if(this.top === null){
      console.log("Stack is empty")
    } else {
      let elm = this.top.data;
      this.top = this.top.next;
      return elm;
    }
  }

  peek(pos){
  let top = this.top;
   let counter = 0;
    while(top != null && pos-1){
      counter ++
      if(pos===1){
        return top.data;
      }
      pos--
      top = top.next
    }
    if (counter != pos){
        console.log("Position Not in the list")
      }
  }
}

let s = new Stack()

s.push(5)
s.push(6)
s.push(7)
s.push(8)
s.push(9)
s.push(10)

console.log(s)
s.display(s.top)
//s.pop()
s.peek(3)

