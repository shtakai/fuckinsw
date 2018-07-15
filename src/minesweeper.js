const printBoard = board => {
  let printBoard = 'Current Board:\n'
  for (let col of board) {
    printBoard += col.join(' | ')
    printBoard += '\n'
  }
  return printBoard
}

module.exports = printBoard
