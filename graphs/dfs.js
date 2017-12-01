let adjacencyGraph = [
                [0, 1, 1, 0, 0],
                [1, 0, 0, 1, 1],
                [1, 0, 0, 0, 1],
                [0, 1, 0, 0, 0],
                [0, 1, 1, 0, 0]
            ];

let visited = adjacencyGraph.map((item, index) => {
   return false;
});

/* Iterative method */
let dfs = (graph) => {
    let stack = [];
    let dfsArray = [];
    stack.push(0);
    while(stack.length !== 0) {
        let node = stack.pop();
        if (!visited[node]) {
            visited[node] = true;
            dfsArray.push(node);
            for (let i=0; i<graph[node].length; i++) {
                if (graph[node][i] > 0) {
                    stack.push(i);
                }
            }
        }
    }
    return dfsArray.join(', ');
};

console.log('DFS traversal of graph = ' + dfs(adjacencyGraph));