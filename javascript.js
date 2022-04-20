let randomColor = false
let brightN = 100


let outerContainer = document.createElement('div')
outerContainer.setAttribute('class', 'outerContainer')
document.body.appendChild(outerContainer)


let bodyContainer = document.createElement('div')
bodyContainer.setAttribute('class', 'container')
outerContainer.appendChild(bodyContainer)

bodyContainer.style.display = 'grid'
bodyContainer.style.gap = '0px'

let btnDiv = document.createElement('div')
btnDiv.setAttribute('class', 'btnDiv')
document.body.insertBefore(btnDiv, outerContainer)

let resetBtn = document.createElement('button')
resetBtn.setAttribute('class', 'resetBtn')
resetBtn.textContent = 'New Canvas'
btnDiv.appendChild(resetBtn)

let blackBtn = document.createElement('button')
blackBtn.setAttribute('class', 'blackbtn')
blackBtn.textContent = 'Use black brush'
btnDiv.appendChild(blackBtn)

let randomBtn = document.createElement('button')
randomBtn.setAttribute('class', 'randomBtn')
randomBtn.textContent = 'Use random RGB brush'
btnDiv.appendChild(randomBtn)




let createGrid = (x, y) => {
    let total = x * y
    for (let n = 1; n <= total; n++) {
        console.log(n)
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'gridDivs')
        bodyContainer.appendChild(newDiv)
        bodyContainer.style.gridTemplateColumns = `repeat(${y}, 1fr)`
        //bodyContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`

    }
}






createGrid(16, 16)

let allGrids = document.querySelectorAll('.gridDivs')
let GridArray = Array.from(allGrids)



let colorHover = (element) => {
    element=element.target
    if (randomColor == false){
        element.style.backgroundColor = 'black'
        element.classList.add('colored')
    }
    else if (randomColor == true && element.classList.contains('colored') == false) {
        //console.log(Math.floor(Math.random() * 256))
      
        element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        element.classList.add('colored')
        element.id = '100'
        
       
    }
    else if (randomColor == true && element.classList.contains('colored') == true && Number(element.id) > 0) {
        element.style.filter = `brightness(${Number(element.id) - 10}%)`
        element.id = Number(element.id) - 10
    }
}




GridArray.forEach(element => {
    element.addEventListener('mouseover', mouseOver =() => {
        element.classList.add('hoverOver')
        element.addEventListener('mouseout', hoverOver =() => {
            element.classList.remove('hoverOver')
        })
        
    })
    
    element.addEventListener('mousedown', () => {
        if (randomColor == true && element.classList.contains('colored') == false){
            element.classList.add('colored')
            element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        } else if (randomColor == false && element.classList.contains('colored') == false){
            element.classList.add('colored')
            element.style.backgroundColor = 'black'
            
        }
        
        GridArray.forEach(element => {
                
                    element.addEventListener('mouseover', colorHover)
                
                
            
        })
        window.addEventListener('mouseup', () => {
            
            GridArray.forEach(element => {
                element.removeEventListener('mouseover', colorHover)
            })
        })
        
        
    })
    
})

resetBtn.addEventListener('click', () => {
    randomColor = false
    GridArray.forEach(element => {
        element.style.backgroundColor = 'white'
    })
    let newInp = prompt('Please enter the canvas dimension: (ex: 40 for 40x40. Max = 100)')
    
    if (newInp.length < 4 && Number(newInp) <= 100){
        let x = newInp
        let y = newInp
        console.log(x, y)
        bodyContainer.textContent = ''
        createGrid(x, y)
        allGrids = document.querySelectorAll('.gridDivs')
        GridArray = Array.from(allGrids)
        GridArray.forEach(element => {
            element.addEventListener('mouseover', mouseOver =() => {
                element.classList.add('hoverOver')
                element.addEventListener('mouseout', hoverOver =() => {
                    element.classList.remove('hoverOver')
                })
                
            })
            
            element.addEventListener('mousedown', () => {
                if (randomColor == true && element.classList.contains('colored') == false){
                    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
                } else if (randomColor == false && element.classList.contains('colored') == false){
                    element.classList.add('colored')
                    element.style.backgroundColor = 'black'
                }
                
                
                GridArray.forEach(element => {
                        
                            element.addEventListener('mouseover', colorHover)
                        
                        
                    
                })
                window.addEventListener('mouseup', () => {
                    
                    GridArray.forEach(element => {
                        element.removeEventListener('mouseover', colorHover)
                    })
                })
                
                
            })
            
        })
    } else if (newInp.length < 1 || newInp == null || typeof(newInp) != 'number') {
        alert('Invalid Number')
    }
})

randomBtn.addEventListener('click', () => {
    randomColor = true
})

blackBtn.addEventListener('click', () => {
    randomColor = false
})