const printBoard = board => {
  console.log(`Current Board:`)
  let printBoard = ''
  for (let col of board) {
    printBoard += col.join(' | ')
    printBoard += '\n'
  }
  console.log(printBoard)
}

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

printBoard(board)

board[0][1] = '1'
board[2][2] = 'B'

printBoard(board)
