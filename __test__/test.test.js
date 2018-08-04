const {printBoard, generatePlayerBoard, generateBombBoard} = require('../src/minesweeper')

describe('printBoard', () => {
  test('simple board', () => {
    const board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
    expect(printBoard(board)).toBe(
      '  |   |  \n  |   |  \n  |   |  '
    )

    board[0][1] = '1'
    board[2][2] = 'B'

    expect(printBoard(board)).toBe(
      '  | 1 |  \n  |   |  \n  |   | B'
    )
  })

})

describe('generatePlayerBoard', () => {
  test('3x2 board', () => {
    const board = generatePlayerBoard(3, 2)
    const expectedBoard = [
      [ ' ', ' ' ],
      [ ' ', ' ' ],
      [ ' ', ' ' ],
    ]
    expect(board).toEqual(expectedBoard)
  })

  test('2x3 board', () => {
    const board = generatePlayerBoard(2, 3)
    const expectedBoard = [
      [ ' ', ' ', ' ' ],
      [ ' ', ' ', ' ' ],
    ]
    expect(board).toEqual(expectedBoard)
  })
})

describe('generateBombBoard', () => {
  test('3x2 board without bombs', () => {
    const board = generateBombBoard(3, 2, 0)
    const expectedBoard = [
      [ null, null ],
      [ null, null ],
      [ null, null ],
    ]
    expect(board).toEqual(expectedBoard)
  })

  test('2x3 board without bombs', () => {
    const board = generateBombBoard(2, 3, 0)
    const expectedBoard = [
      [ null, null, null ],
      [ null, null, null ],
    ]
    expect(board).toEqual(expectedBoard)
  })

  test('10x10 board with 10 bombs', () => {
    const board = generateBombBoard(10, 10, 10)
    const flattenBoard = Array.prototype.concat.apply([], board)
    expect(flattenBoard.filter(el => el === 'B').length).toEqual(10)
  })
})
