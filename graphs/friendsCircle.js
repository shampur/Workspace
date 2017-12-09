let graph =
    [
        [1,0,1,0,0,0],
        [0,1,0,0,1,0],
        [1,0,1,1,0,0],
        [0,0,1,1,0,1],
        [0,1,0,0,1,0],
        [0,0,0,1,0,1]
    ];

let findCircle = (graph, m , n) => {
    var visited = new Array(n);
    visited.fill(false);
    let circleCount = 0;
    for(let i=0; i<m; i++) {
        if (!visited[i]) {
            dfs(graph, i, n, visited);
            circleCount++;
        }
    }
    return circleCount;
}


var dfs = (graph, i, n, visited) => {
    visited[i] = true;
    for (let j=0; j<n; j++) {
        if(j!==i && graph[i][j] === 1 && (!visited[j])) {
            dfs(graph, j, n, visited);
        }
    }
}

let numberOfFriendsCircle = findCircle(graph, 6, 6);
console.log('The number of friends circle = ' + numberOfFriendsCircle);
