
let count = 0
let totalCount = document.getElementById("title")

function increase(){
count = count + 1
totalCount.innerText = count

}

function reset(){
count = count + 1
totalCount.innerText = 0
}

function decrease(){
count = count - 1
totalCount.innerText = count

}
