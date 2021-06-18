class Graph{
  constructor(){
    this.numberOfNodes=0;
    this.adjacentList={};
  }
  addVertex(node){
    this.adjacentList[node]=[];
    this.numberOfNodes++
  }
  addEdge(node1, node2){
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  display(){

  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

let g = new Graph()
g.addVertex(0)
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)
g.addEdge('3', '1');
g.addEdge('3', '4');
g.addEdge('4', '2');
g.addEdge('4', '5');
g.addEdge('1', '2');
g.addEdge('1', '0');
g.addEdge('0', '2');
g.addEdge('6', '5');

g.showConnections();
console.log(g)

