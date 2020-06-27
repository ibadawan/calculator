function getNumber(num){
    var result= document.getElementById("output")
    result.value=result.value+ num;
}

function clearResult(){
    var result= document.getElementById("output")
    result.value =("")
}

function getResult(){
    var result= document.getElementById("output")
    result.value= eval(result.value)
}

function back(){
    var result = document.getElementById("output");
    result.value = result.value.slice(0,-1)
}

function sign(){
    var result = document.getElementById("output");
    result.value = Math.abs(result.value)
}