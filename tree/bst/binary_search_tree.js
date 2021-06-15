class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data){
    this.root = null;

  }

  insert(val){
    let newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
    } else {
      let data = this.lookup(val);
      if(data){
        console.log("found the element in the BST")
        return
        }
      let currentNode = this.root;

      while(true){
        if(val < currentNode.data){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else{
          //right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(val){
    if(!this.root || !val){
      console.log("Element not found in the binary search tree");
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(val < currentNode.data ){
        currentNode = currentNode.left;
      } else if (val > currentNode.data){
        currentNode = currentNode.right;
      } else if(val === currentNode.data){
        return currentNode;
      }
    }
    console.log("Element not found in the binary search tree");
    return false;
  }

  remove(val){
    if(!this.root){
      console.log("Root Element not found in the BST")
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;

    while(currentNode){
      if(val < currentNode.data){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (val > currentNode.data){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (val === currentNode.data){
        //All the here
        let leftChild = currentNode.left;
        let rightChild = currentNode.right;
        if(leftChild  && rightChild){
          console.log("has both child")
          parentNode.left = currentNode.right;
          currentNode.right.left = currentNode.left;


        } else if( leftChild){
          parentNode.left = currentNode.left;
        }  else if( rightChild ){
          parentNode.left = currentNode.right;
        }
        if(!leftChild && !rightChild){ //NO child
          parentNode.left = null;
        }
          return true;
      }
    }
  }
}


let bt = new BinaryTree();
bt.insert(5)
bt.insert(2)
bt.insert(6)
bt.insert(1)
bt.insert(9)
bt.insert(9)
bt.insert(7)
bt.insert(8)
console.log(bt.lookup(2))
bt.remove(2)
JSON.stringify(bt)

