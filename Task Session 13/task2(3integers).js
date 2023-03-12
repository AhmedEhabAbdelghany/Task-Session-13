var x = Number(prompt("Please Enter Value of X"))

var y = Number(prompt("Please Enter Value of Y"))

var z = Number(prompt("Please Enter Value of Z"))

function comp (x,y,z){
    if(x > y && x > z){
        console.log("Max element Is: "+ x)
        if(y>z){
            console.log("Min element Is: "+ z)
        }
        else if(z>y){
            console.log("Min element Is: "+ y)
        }
    }
    else if(y > x && y > z){
        console.log("Max element Is: "+ y)
        if(x>z){
            console.log("Min element Is: "+ z)
        }
        else if(z>x){
            console.log("Min element Is: "+ x)
        }
    }
    else if(z > x && z > y){
        console.log("Max element Is: "+ z)
        if(x>y){
            console.log("Min element Is: "+ y)
        }
        else if(y>x){
        console.log("Min element Is: "+ x)
        }
    }
}
comp(x,y,z)