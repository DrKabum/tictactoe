// DOM elements
const grid = document.getElementById('grid')
const restartBtn = document.getElementById('restart-button')

// variables
let line1 = ['', '', '']
let line2 = ['', '', '']
let line3 = ['', '', '']
const table = [line1, line2, line3]
let p1turn = true

// grid initialization
function generateGrid() {
    table.forEach((line, index) => {
        for(let i = 0; i < line.length; i++) {
            const el = document.createElement('div')
            el.classList.add('tile')
            el.id = `tile-${index}-${i}`
            el.dataset.row = index
            el.dataset.col = i
            grid.appendChild(el)
        }
    })
}

function handleClick(e) {
    const mark = p1turn ? "x" : "o"
    const {col, row} = e.target.dataset

    if(table[col][row] === "") {
        table[col][row] = mark
        e.target.textContent = mark
        p1turn = !p1turn
    }
}

// listeners
function initializeGridListeners() {
    const tiles = grid.childNodes
    tiles.forEach(item => item.addEventListener('click', (e) => handleClick(e) ))
}

generateGrid()
initializeGridListeners()
