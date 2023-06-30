var item = document.querySelector("#items")

console.log(item.parentNode)
item.parentNode.style.backgroundColor = "blue"

console.log(item.parentElement)
item.parentElement.style.backgroundColor = "yellow"

console.log(item.childNodes)

console.log(item.children)
item.children[1].style.backgroundColor = "red"

console.log(item.firstChild)
item.firstChild.style.backgroundColor = "red"

console.log(item.firstElementChild)
item.firstElementChild.style.backgroundColor = "blue"
item.firstElementChild.textContent = "Hello 1"

console.log(item.lastElementChild)
item.lastElementChild.textContent = "Hello 2"

console.log(item.lastChild)

console.log(item.nextSibling)
console.log(item.nextElementSibling)





var newDiv = document.createElement("div")
newDiv.className = "hello"
newDiv.id = "hello2"
newDiv.setAttribute("title", "Hello Div")
var newDivText = document.createTextNode("Hello World")
newDiv.appendChild(newDivText)

var container = document.querySelector(".list-group")
var h1 = document.querySelector(".list-group-item")
console.log(newDiv)
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1)


var newDiv = document.createElement("div")
newDiv.className = "hello"
newDiv.id = "hello2"
newDiv.setAttribute("title", "Hello Div")
var newDivText = document.createTextNode("Hello World")
newDiv.appendChild(newDivText)

var container = document.querySelector(".container")
var h1 = document.querySelector(".titlee")
console.log(newDiv)
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv, h1)






