let matrix = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 0]
];

function fillMatrix(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let row = new Array(m).fill(false);
    let col = new Array(n).fill(false);
    for(var i = 0; i < m; i++) {
        for(var j=0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for(var i = 0; i < m; i++) {
        for(var j=0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

}

fillMatrix(matrix);

console.log('Matrix after filling with zeroes = ' + JSON.stringify(matrix));

