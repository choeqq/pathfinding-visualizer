class AjlistNode {
  public id: number;
  public next: AjlistNode | null;
  constructor(id: number) {
    this.id = id;
    this.next = null;
  }
}
class Vertices {
  public data: number;
  public next: AjlistNode | null;
  public last: AjlistNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.last = null;
  }
}
class Graph {
  public size: number;
  public node: Vertices[] | null[];
  constructor(size: number) {
    this.size = size;
    this.node = Array(size).fill(null);
    this.setData();
  }

  public setData() {
    if (this.size <= 0) {
      console.error("Empty graph :(");
    } else {
      for (let i = 0; i < this.size; i++) {
        this.node[i] = new Vertices(i);
      }
    }
  }

  public connect(start: number, last: number) {
    const edge = new AjlistNode(last);
    if (this.node[start]!.next === null) {
      this.node[start]!.next = edge;
    } else {
      this.node[start].last.next = edge;
    }
    this.node[start].last = edge;
  }

  public printGraph() {
    if (this.size > 0) {
      for (let i = 0; i < this.size; i++) {
        console.log("\nAdjacency list of vertex " + i + " :");
        let temp = this.node[i]?.next;
        while (temp !== null) {
          console.log("  " + this.node[temp!.id]?.data);
          temp = temp?.next;
        }
      }
    }
  }
}
