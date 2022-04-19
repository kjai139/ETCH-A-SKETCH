let outerContainer = document.createElement('div')
outerContainer.setAttribute('class', 'outerContainer')
document.body.appendChild(outerContainer)


let bodyContainer = document.createElement('div')
bodyContainer.setAttribute('class', 'container')
outerContainer.appendChild(bodyContainer)

bodyContainer.style.display = 'grid'
bodyContainer.style.gap = '1px'



let createGrid = (x, y) => {
    let total = x * y
    for (let n = 1; n <= total; n++) {
        console.log(n)
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'gridDivs')
        bodyContainer.appendChild(newDiv)
        bodyContainer.style.gridTemplateColumns = `repeat(${y}, 1fr)`
        bodyContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`

    }
}




createGrid(16, 16)

let allGrids = document.querySelectorAll('.gridDivs')
let GridArray = Array.from(allGrids)

let redHover = (element) => {
    element=element.target
    element.style.backgroundColor = 'red'
}


GridArray.forEach(element => {
    element.addEventListener('mouseover', mouseOver =() => {
        element.classList.add('hoverOver')
        element.addEventListener('mouseout', hoverOver =() => {
            element.classList.remove('hoverOver')
        })
        
    })
    
    element.addEventListener('mousedown', () => {
        let mousedown = true
        element.style.backgroundColor = 'red'
        GridArray.forEach(element => {
            if (mousedown == true) {
                element.addEventListener('mouseover', redHover)
            }
        })
        
        
    })
    
})