class MaxBinaryHeap{
  constructor(){
    this.values = []
  }

  bubbleup(){
   let idx= this.values.length -1;
   const element = this.values[idx];
   let parentIndex = Math.floor((idx-1)/2);
   let parentElement = this.values[parentIndex];

  // A bit different logic, but same idea
  //  while(idx > 0 && element > parentElement){
  //    this.values[idx] = this.values[Math.floor((idx-1)/2)];
  //    idx = Math.floor((idx-1)/2);;
  //  }
  //  this.values[idx] = element;

   while(idx>0 ){
     const parentIndex = Math.floor((idx-1)/2);
     const parentElement = this.values[parentIndex];
     if(element <= parentElement ) break;
     this.values[parentIndex] = element;
     this.values[idx] = parentElement;
     idx = parentIndex;
   }
  }

  insert(element){
    this.values.push(element);
    this.bubbleup()
  }

  create(arr){
    this.values.push(arr[0])
    this.insert(20)
    for(let i=1; i<arr.length; i++){
      this.insert(arr[i])
    }
  }
  //[100, 55, 45, 35, 40, 30, 20, 10, 25, 20,  1,  3, 5]
  //[5, 55, 45, 35, 40, 30, 20, 10, 25, 20,  1,  3]

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
         if(leftChild > element){
           swap = leftChildIdx;
         }

      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx]
         if((swap === null && rightChild > element)||
            (swap != null && rightChild > leftChild)
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

  extractMax(){
    let max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown()
    }

    return max;
  }
}

let mbh = new MaxBinaryHeap();
const inputArray = [10,20,30,25,5,40,35]
mbh.create(inputArray);
// mbh.insert(55)
// mbh.insert(100)
 mbh.insert(1)
// mbh.insert(3)
// mbh.insert(45)
console.log(mbh)
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
mbh.extractMax()
console.log(mbh)
