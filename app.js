/*
let centimeters;

document.getElementById("submit").onclick = function(){    
    
    centimeters = document.getElementById("usabox").value;
    console.log(centimeters);
    document.getElementById("centicount").innerHTML = centimeters * 2.54;
}
*/
let toConvert;

document.getElementById("myButton").onclick = function(){
    
    toConvert = document.getElementById("myText").value;
    console.log(toConvert);
    document.getElementById("myLabel").innerHTML = toConvert * 2.54;
}

