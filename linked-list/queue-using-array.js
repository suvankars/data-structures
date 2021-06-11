
class Queue {
  constructor(size){
    this.front = -1;
    this.rear = -1;
    this.data = [];
  }

  peek(){
  if(this.front === this.rear){
    console.log("Queue is empty nothing to peek");
  }
   return  this.data[this.front+1]
  }
  enqueue(elm){
    this.rear = this.rear +1;
    this.data[this.rear] = elm;
  }

  dequeue(){
   let val = -1
    if(this.front === this.rear){
      console.log("Queue is empty");
    } else {

      this.front++;
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

let q = new Queue();
console.log(q)
q.enqueue(2);
q.enqueue(4);
q.enqueue(8);
q.enqueue(9);
q.enqueue(14);
q.enqueue(18);
console.log("peeked element is:", q.peek())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log("peeked element is:", q.peek())
console.log(q.dequeue())
console.log(q.dequeue())
console.log("peeked element is:", q.peek())
console.log(q)
q.display()

