// DOM elements
const grid = document.getElementById('grid')
const restartBtn = document.getElementById('restart-button')
const message = document.getElementById('message')

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

function playRound(e) {
    const mark = p1turn ? "x" : "o"
    const {col, row} = e.target.dataset

    if(table[row][col] === "" && !isGameOver()) {
        table[row][col] = mark
        e.target.textContent = mark
        if(isGameOver()) {
            message.textContent = `${p1turn ? "Player 1" : "Player 2"} has won!`
        } else {
            p1turn = !p1turn
            message.textContent = `${p1turn ? "Player 1" : "Player 2"} turn`
        }        
    }
}

function isGameOver() {
    const rowsAsLines = table.map((_, i) => table.map(v => v[i]))
    const diagonal1 = [line1[0], line2[1], line3[2]]
    const diagonal2 = [line1[2], line2[1], line3[0]]
    // line check
    if(isLineWon(table)) return true
    // column check
    else if(isLineWon(rowsAsLines)) return true
    // diagonals
    else if(isSameOnLine(diagonal1) || isSameOnLine(diagonal2)) return true
    else return false
}

function isLineWon(array) {
    for(const line of array) {
        if(isSameOnLine(line)) return true
    }
}

function isSameOnLine(array) {
    return array.every(v => v === "x") || array.every(v => v === "o")
}

// listeners
function initializeGridListeners() {
    const tiles = grid.childNodes
    tiles.forEach(item => item.addEventListener('click', (e) => playRound(e) ))
}

generateGrid()
initializeGridListeners()
