let Queue = require('../stacks_and_queues/queue');

let queue = new Queue();

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

let bfs = (graph) => {
    queue.enqueue(0);
    let bfsArray = [];
    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        if (!visited[node]){
            visited[node] = true;
            bfsArray.push(node);
            for(let i=0; i < graph[node].length; i++) {
                if((!visited[i]) && graph[node][i]===1){
                    queue.enqueue(i);
                }
            }
        }
    }
    return bfsArray.join(', ');
};


console.log('BFS traversal of the graph = ' + bfs(adjacencyGraph));