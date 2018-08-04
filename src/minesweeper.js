const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []
  for (let i = 0; i < numberOfRows; i++) {
    let row = []
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ')
    }
    board.push(row)
  }
  return board
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs = 0) => {
  let numberOfBombsPlaced = 0
  let board = []
  for (let i = 0; i < numberOfRows; i++) {
    let row = []
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(null)
    }
    board.push(row)
  }

  // Add bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = parseInt(Math.random() * numberOfRows)
    let randomColumnIndex = parseInt(Math.random() * numberOfColumns)
    // inclease counter if bomb can be set.
    if (board[randomRowIndex][randomColumnIndex] === null) {
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced++
    }
  }

  return board
  }

const printBoard = board => {
  let outputBoard = 'Current Board:\n'
  for (let col of board) {
    outputBoard += col.join(' | ')
    outputBoard += '\n'
  }
  return outputBoard
}

module.exports = {
  printBoard,
  generatePlayerBoard,
  generateBombBoard,
}

// console.log(generatePlayerBoard(2,4))
// console.log(printBoard(generatePlayerBoard(2,4)))
// console.log(generateBombBoard(3,4,2))
