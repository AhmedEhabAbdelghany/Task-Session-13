var x = Number(prompt("Please Enter Value of X"))

var y = Number(prompt("Please Enter Value of Y"))

function comp (x,y){
    if(x > y){
    return console.log("X Greater Than Y")
    }
    else if( x < y){
    return console.log("Y Greater Than X")
    }
    else{ 
    return console.log("X Equal Y")
    }
}
comp(x,y)