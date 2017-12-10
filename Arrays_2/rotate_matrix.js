
function rotate(matrix){
    let mat = matrix;
    let n = mat[0].length;
    for (let i=0; i<n; i++) {
        for (let j=0; j < n; j++) {
            if ((!((n-j-1 === i) && (n-i-1 === j))) && (i + j < n)){
                let temp = mat[i][j];
                mat[i][j] = mat[n-1-j][n-1-i];
                mat[n-1-j][n-1-i] = temp;
            }
        }
    }

    return mat.reverse();
};

var rotatedMatrix = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log('Rotated Matrix = ' + JSON.stringify(rotatedMatrix));