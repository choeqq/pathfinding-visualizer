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
   * Creates a new vertex with empty edges.
   * @param vName Name of the vertex
   */
  constructor(vName: string) {
    this._name = vName;
    this._edges = [];
  }
}

class Graph {
  private _adjList: Vertex[];
  constructor() {
    this._adjList = [];
  }

  /**
   * A method to add a new vertex to the graph.
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
   * Adds an edge to the graph.
   * @param vertex1 One of the vertices between an edge
   * @param vertex2 Another vertex of an edge
   */
  addEdge(vertex1: string, vertex2: string): boolean {
    this._adjList.find((v) => v.name === vertex1)?.edges.push(vertex2);

    this._adjList.find((v) => v.name === vertex2)?.edges.push(vertex1);

    return true;
  }
  /**
   * Removes an edge between two vertices.
   * @param vertex1 One of the vertex of an edge to be removed
   * @param vertex2 ANother vertex of an edge to be removed
   */
  removeEdge(vertex1: string, vertex2: string): boolean {
    this._adjList.find((v) => v.name === vertex1).edges = this._adjList
      .find((v) => v.name === vertex1)
      .edges.filter((v) => v !== vertex2);

    this._adjList.find((e) => e.name === vertex2).edges = this._adjList
      .find((e) => e.name === vertex2)
      .edges.filter((v) => v !== vertex1);

    return true;
  }

  dfs(startVertexName: string): string[] {
    let res: string[] = [];
    let visited: any = {};
    let stack: string[] = [];
    stack.push(startVertexName);

    while (stack.length > 0) {
      let name = stack.pop();
      let currVertex = this._adjList.find((v) => v.name === name);
      if (!visited[currVertex!.name]) {
        // Mark the current vertex as visited
        visited[currVertex!.name] = true;
        // Add the current vertex to result list
        res.push(currVertex!.name);
        // Visit the neighbors of the current vertex one by on, if they are not already visited
        currVertex?.edges.forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }

    return res;
  }
}
