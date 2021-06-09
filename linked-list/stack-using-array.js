class Stack {
  constructor(){
    this.top = -1;
    this.array = [];
  }

  peek(pos){
    let val = -1
    if(this.top - pos + 1 < 0){
      console.log("Invalid position")
    } else {
      val = this.array[this.top - pos + 1];
    }
    return val
  }

  push(data){
    this.top = this.top+1;
    this.array[this.top] = data
  }

  pop(){
    let val = -1;
    if(this.top === -1){
      console.log("stack underflow")
    } else {
      const val = this.array[this.top];
      this.array.length = this.top
      this.top--
      return val
    }
    return val
  }

  stackTop(){
    let val = -1
    if(this.top === -1 ){
      console.log("Stack is empty")
    } else {
      val = this.array[this.top];
    }
    return val;
  }

  isEmpty(){
    return this.top === -1 ? true : false;
  }

  isFull(){
    return this.top === this.array.length
  }
}

let s = new Stack();
s.push(3)
s.push(5)
s.push(7)
console.log("Push an element", s.push(23))
console.log("Push another element", s.push(29))
console.log("Peek this element 10", s.peek(2))
console.log("Pop an element", s.pop())
console.log("Stack top", s.stackTop())
console.log("Pop an element", s.pop())
console.log("is the Stack empty", s.isEmpty())


