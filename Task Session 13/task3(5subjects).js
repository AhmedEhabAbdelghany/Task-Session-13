var subject1 = Number(prompt("Please Enter Value of Subject1"))

var subject2 = Number(prompt("Please Enter Value of Subject2"))

var subject3 = Number(prompt("Please Enter Value of Subject3"))

var subject4 = Number(prompt("Please Enter Value of Subject4"))

var subject5 = Number(prompt("Please Enter Value of Subject5"))

function comp (subject1,subject2,subject3,subject4,subject5){
    var total = subject1 + subject2 + subject3 + subject4 + subject5
    console.log("Total Marks =" + total)

    var average  = total / 5
    console.log("Average Marks =" + average)

    var Percentage  = total / 5
    console.log("Percentage =" + Percentage+"%")
}
comp(subject1,subject2,subject3,subject4,subject5)