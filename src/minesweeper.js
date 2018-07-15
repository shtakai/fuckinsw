const printBoard = board => {
  console.log(`Current Board:`)
  let printBoard = ''
  for (let col of board) {
    printBoard += col.join(' | ')
    printBoard += '\n'
  }
  console.log(printBoard)
  return printBoard
}

module.exports = printBoard
