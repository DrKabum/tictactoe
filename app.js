// DOM elements
const grid = document.getElementById('grid')
const restartBtn = document.getElementById('restart-button')

// variables
let line1 = ['', '', '']
let line2 = ['', '', '']
let line3 = ['', '', '']
const table = [line1, line2, line3]

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

//listeners
function initializeGridListeners() {
    const tiles = grid.childNodes
    tiles.forEach(item => item.addEventListener('click', () => console.log(`row ${item.dataset.row}, col ${item.dataset.col}`)))
}

generateGrid()
initializeGridListeners()
