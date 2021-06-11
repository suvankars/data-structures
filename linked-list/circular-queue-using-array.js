
class CircularQueue {
  constructor(size){
    this.front = -1;
    this.rear = -1;
    this.data = [];
    this.size = size
  }

  peek(){
  if(this.front === this.rear){
    console.log("Queue is empty nothing to peek");
  }
   return  this.data[this.front+1]
  }
  enqueue(elm){
    if((this.rear+1)%this.size === this.front){
      console.log("Stack is full")
    } else{
      this.rear = (this.rear + 1)%this.size
      this.data[this.rear] = elm;
    }
  }

  dequeue(){
   let val = -1
    if(this.front === this.rear){
      console.log("Queue is empty");
    } else {
      this.front = (this.front+1)%this.size;
      val = this.data[this.front]
    }
    return val;
  }
  display(){
    if(this.front === this.rear){
      console.log("Queue is empty nothing to display")
    }
    for(let i = this.front+1; i <= this.rear; i++){
      process.stdout.write(this.data[i] + "-->")
    }
    console.log('\n')
  }
}

let q = new CircularQueue(7);

q.enqueue(2);
q.enqueue(4);
q.enqueue(8);
q.enqueue(9);
q.enqueue(14);

console.log("dequeue: ", q.dequeue());
console.log("dequeue: ", q.dequeue());
q.enqueue(18);
q.display()

