const grid = document.getElementById('grid')
const squares = []

function snakeGrid() {
 for (let i = 0; i < 100; i++) {
  const square = document.createElement("div")
  square.classList.add('square')
  grid.appendChild(square)
  squares.push(square)
 }
}
snakeGrid()

