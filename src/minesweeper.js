const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = []
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ')
    }
    board.push(row)
  }
  return board
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs = 0) => {
  let numberOfBombsPlaced = 0
  let board = []
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = []
    for (let columnIndex = 0; columnIndex <  numberOfColumns; columnIndex++) {
      row.push(null)
    }
    board.push(row)
  }

  // Add bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows)
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns)
    // inclease counter if bomb can be set.
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced++
    }
  }

  return board
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1,  0],
    [-1,  1],
    [ 0, -1],
    [ 0,  1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1],
  ]
  const numberOfRows = bombBoard.length
  const numberOfColumns = bombBoard[0].length

  let numberOfBombs = 0

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0]
    const neighborColumnIndex = columnIndex + offset[1]
    if (
      neighborRowIndex >= 0 &&
      neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 &&
      neighborColumnIndex < numberOfColumns
    ) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++
      }
    }
  })
  return numberOfBombs
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log(`This tile has already been flipped!`)
    return
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B'
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
  }
}

const printBoard = board => {
  return board.map(row => row.join(' | ')).join('\n')
}

module.exports = {
  printBoard,
  generatePlayerBoard,
  generateBombBoard,
}

// console.log(generatePlayerBoard(2,4))
// console.log(printBoard(generateBombBoard(2, 3, 4)))
// console.log(generateBombBoard(3,4,2))
//

let playerBoard = generatePlayerBoard(3, 4)
let bombBoard = generateBombBoard(3, 4, 5)
console.log('Player Board: ')
console.log(printBoard(playerBoard))
console.log('Bomb Board: ')
console.log(printBoard(bombBoard))

flipTile(playerBoard, bombBoard, 0, 0)
console.log(`Updated Player Board:`)
console.log(printBoard(playerBoard))
