let board = [
    ['a', 'b', 'c', 'e'],
    ['s', 'f', 'c', 's'],
    ['a', 'd', 'e', 'e']
];

let word = 'abcb';

let res = serach(word, board);

console.log('The result of searching the string = ' + res);

function serach(word, board) {
    var m = board.length;
    var n = board[0].length;
    for (var i = 0; i < m ; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if(dfs(word, board, i, j, 0)){
                    return true;
                }
            }
        }
    }
    return false;

    function dfs(word, board, i, j, k) {
        var m = board.length;
        var n = board[0].length;
        var wl = word.length;
        if ((i < 0) || (j < 0) || (i > m - 1) || (j > n - 1)) {
            return false;
        }

        if (board[i][j] === word[k]) {
            if(k === wl - 1) {
                return true;
            } else {
                var temp = board[i][j];
                board[i][j] = '#';
                if( dfs(word, board, i-1, j, k+1) || dfs(word, board, i, j+1, k+1) ||
                    dfs(word, board, i+1, j, k+1) || dfs(word, board, i, j-1, k+1)){
                    board[i][j] = temp;
                    return true;
                } else {
                    board[i][j] = temp;
                    return false;
                }
            }
        }
    }
}


