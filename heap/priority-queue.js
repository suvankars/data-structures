

class Node{
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue{
  constructor(){
    this.values = []

  }

  bubbleup(){
   let idx= this.values.length -1;
   const element = this.values[idx];
   let parentIndex = Math.floor((idx-1)/2);
   let parentElement = this.values[parentIndex];

   while(idx>0 ){
     const parentIndex = Math.floor((idx-1)/2);
     const parentElement = this.values[parentIndex];
     if(element.priority >= parentElement.priority ) break;
     this.values[parentIndex] = element;
     this.values[idx] = parentElement;
     idx = parentIndex;
   }
  }

  enque(element, priority){
    const newNode = new Node(element, priority);
    this.values.push(newNode);
    this.bubbleup()
  }

  create(arr){
    this.values.push(arr[0])

    for(let i=1; i<arr.length; i++){
      this.insert(arr[i])
    }
  }

  sinkDown(){
    let idx =0
    let element = this.values[0];
    let length = this.values.length;

    while(true){
      let leftChildIdx=2*idx+1
      let rightChildIdx=2*idx+2

      let swap=null;
      let leftChild, rightChild

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx]
         if(leftChild.priority < element.priority){
           swap = leftChildIdx;
         }

      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx]
         if((swap === null && rightChild.priority < element.priority)||
            (swap != null && rightChild.priority < leftChild.priority)
         ){
           swap = rightChildIdx;
         }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  dequeue(){
    let min = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown()
    }

    return min;
  }
}




let PQ = new PriorityQueue();
PQ.enque("high fever", 2)
PQ.enque("broken leg", 1)
PQ.enque("bcommon cold", 3)
PQ.enque("knee pain", 4)
PQ.enque("back pain", 6)
PQ.enque("hedeach", 5)
console.log(PQ.dequeue())
console.log(PQ)
