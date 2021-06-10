//Parenthesis maching
 class Stack {
   constructor(){
     this.data = [];
     this.top = -1;
   }

   push(elm){
     this.top = this.top + 1
     this.data[this.top] = elm
     return this.data
   }

   pop(elm){
    let match = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }

     if(this.top === -1){
       console.log("empty")
     }
     const val = this.data[this.top];

     if(match[val] === elm){
      this.top = this.top -1;
      return val;
     } else {
       return false;
     }
   }
 }

class Parser {
  constructor(){
    this.stack = new Stack;
  }

  getOpeningClosings(){

  }

  isValid(data){
    const elements = data.split('')
    for(let elm of elements){
      if(['(', '{', '['].includes(elm) ){
        this.stack.push(elm)
      } else if([')', '}', ']'].includes(elm)){
        if(!this.stack.pop(elm)){ return false}

      }
    }

    return this.stack.top === -1 ? true : false

  }
}





let input = "({[]})"
let p = new Parser()
p.isValid(input)
