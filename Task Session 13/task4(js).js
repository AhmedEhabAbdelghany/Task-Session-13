var x = prompt("Please Enter")

function swapCase(x){
    var letters =x.split('')
    var newArray=[]
    for(var letter of letters){
        if(letter === letter.toUpperCase()){
            newArray.push(letter.toLowerCase())
        }else{
            newArray.push(letter.toUpperCase())
        }
    }
    return newArray.join('')
}
swapCase(x)






