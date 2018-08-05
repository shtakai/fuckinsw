const board = [
  [ null, null ],
  [ null, 'B' ],
  [ null, null ],
]

const simpleArray = [ 'B', null, 'B', 'B', null ]

let x =  board.reduce((arr, current) => {
  current.forEach(el => arr.push(el))
  return arr
}, [])

// let z = board.forEach(m => m.forEach(n => {y.push(n)}))
// let x = simpleArray.filter(el => el === 'B')


// let x = board.reduce(reducer_1)

console.log(x)
