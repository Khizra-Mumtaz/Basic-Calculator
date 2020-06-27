function clr(){
    var clr = document.getElementById("scrn")
    clr.value = ""
}

function insert(x){
    var screen = document.getElementById("scrn")
    screen.value += x
}
function result(){
    var result = document.getElementById("scrn")
    result.value = eval(result.value)
}

