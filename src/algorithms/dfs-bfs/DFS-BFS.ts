class Vertex {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  private _edges: string[];

  public get edges(): string[] {
    return this._edges;
  }

  public set edges(v: string[]) {
    this._edges = v;
  }
  /**
   * creates a new vertex with empty edges.
   * @param vName Name of the vertex
   */
  constructor(vName: string) {
    this._name = vName;
    this._edges = [];
  }
}

export default class Graph {
  private _adjList: Vertex[];
  constructor() {
    this._adjList = [];
  }

  /**
   * a method to add a new vertex to the graph.
   * @param newVertex Name of the vertex to be added to the graph
   */
  addVertex(newVertex: Vertex) {
    if (this._adjList.find((v) => v.name === newVertex.name)) {
      return true;
    }

    this._adjList.push(newVertex);
    return true;
  }
  /**
   * adds an edge to the graph.
   * @param vertex1 one of the vertices between an edge
   * @param vertex2 another vertex of an edge
   */
  addEdge(vertex1: string, vertex2: string): boolean {
    this._adjList.find((v) => v.name === vertex1)?.edges.push(vertex2);

    this._adjList.find((v) => v.name === vertex2)?.edges.push(vertex1);

    return true;
  }
  /**
   * removes an edge between two vertices.
   * @param vertex1 one of the vertex of an edge to be removed
   * @param vertex2 another vertex of an edge to be removed
   */
  removeEdge(vertex1: string, vertex2: string): boolean {
    // need to fix undefined issue, currently done with '!', which is bad

    // remove vertex2 from the edges of vertex1
    this._adjList.find((v) => v.name === vertex1)!.edges = this._adjList
      .find((v) => v.name === vertex1)!
      .edges.filter((v) => v !== vertex2);

    // remove vertex1 from the edges of vertex2
    this._adjList.find((e) => e.name === vertex2)!.edges = this._adjList
      .find((e) => e.name === vertex2)!
      .edges.filter((v) => v !== vertex1);

    return true;
  }

  //iterative
  dfs(startVertexName: string): string[] {
    let res: string[] = [];
    let visited: any = {};
    let stack: string[] = [];
    stack.push(startVertexName);

    while (stack.length > 0) {
      let name = stack.pop();
      // removing startVertex from stack
      let currVertex = this._adjList.find((v) => v.name === name);
      if (!visited[currVertex!.name]) {
        // mark the current vertex as visited
        visited[currVertex!.name] = true;
        // add the current vertex to result list
        res.push(currVertex!.name);
        // visit the neighbors of the current vertex one by on, if they are not already visited
        currVertex?.edges.forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }

    return res;
  }

  //iterative
  bfs(startVertexName: string): string[] {
    let res: string[] = [];
    let visited: any = {};
    let queue: string[] = [];
    queue.push(startVertexName);

    while (queue.length > 0) {
      let name = queue.shift();
      // removing startVertex from queue
      let currVertex = this._adjList.find((v) => v.name === name);
      if (!visited[currVertex!.name]) {
        // mark the current vertex as visited
        visited[currVertex!.name] = true;
        // add the current vertex to result list
        res.push(currVertex!.name);
        // visit the neighbors of the current vertex one by on, if they are not already visited
        currVertex?.edges.forEach((neighbor) => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        });
      }
    }
    return res;
  }
}
