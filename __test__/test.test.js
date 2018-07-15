const printBoard = require('../src/minesweeper')

describe('printBoard', () => {
test('simple board', () => {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  expect(printBoard(board)).toBe(
    'Current Board:\n  |   |  \n  |   |  \n  |   |  \n'
  )

  board[0][1] = '1'
  board[2][2] = 'B'

  expect(printBoard(board)).toBe(
    'Current Board:\n  | 1 |  \n  |   |  \n  |   | B\n'
  )
})

})
