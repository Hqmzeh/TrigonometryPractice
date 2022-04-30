var variables = [1, 1, 1, 1, 1, 1]
var userAnswer = 1

const trigonometricFunction = ["sin", "cos", "tan"] // assign the functions
const theta = [0, 30, 45, 60, 90, 180, 270, 360]
const coterminal = [0, 1]
var randomTrigonometricFunction = trigonometricFunction[Math.floor(Math.random() * trigonometricFunction.length)]
var randomCoterminal = 360 * coterminal[Math.floor(Math.random() * coterminal.length)] //randomize stuff from the arrays at top to make a unique value each refresh 
var randomTheta = theta[Math.floor(Math.random() * theta.length)] + randomCoterminal
var radianTheta = randomTheta * Math.PI / 180 //converting from degree to radians because Math.sin requires radians
var tanExceptions = [90, 270, 450, 630]
//here is some stuff that is standard nowadays so I copied it because I have no idea how this work. it add sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getQuestion() {
    document.getElementById("theQuestion").innerText = randomTrigonometricFunction + "(" + randomTheta + ")" //add the question to the screen

    timer: for (i = 15; i > -1; --i) { //a countdown that uses sleep the "async" at the top make this work remove it and it wont. used a label for this function
        document.getElementById("theTimer").innerText = "00:" + i

        if (document.getElementById("result").innerHTML == "Correct") { //breaking timer if we got the answer right or wrong
            document.getElementById("theTimer").style.color = "green"
            break timer;
        } else if (document.getElementById("result").innerHTML == "Incorrect") {
            document.getElementById("theTimer").style.color = "red"
            break timer;
        }

        await sleep(1000);


        if (i == 0) {

            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Timed Out"
            document.getElementById("Submit").value = "New Question"
        }

    }
}
//I am checking for color value so I can toggle the userAnswer values as I like
function disableButton(ID, arrayToBeReplaced, value) {
    if (document.getElementById(ID).style.backgroundColor == "transparent") {
        document.getElementById(ID).style.backgroundColor = "lightgreen"
        variables.splice(arrayToBeReplaced, 1, value)
    } else {
        document.getElementById(ID).style.backgroundColor = "transparent"
        variables.splice(arrayToBeReplaced, 1, 1)
    }
}

//some annoying if statments that checks for √ and root the number after it
//and some more that does the same but with sin. I used parseFloat and .toFixed to make the answer as 0.0 to help with correcting the questions
function submitAnswer() {
    if (document.getElementById("Submit").value == "New Question") {
        window.location.reload("Refresh")
    } else {

        var multiplicies = [variables[0], 1, 1]
        if (variables[1] == "√") {
            var t = Math.sqrt(variables[2])
            multiplicies.splice(1, 1, t)
        } else {
            multiplicies.splice(1, 1, variables[2])
        }

        if (variables[4] == "√") {
            var y = Math.sqrt(variables[5])
            multiplicies.splice(2, 1, y)
        } else {
            multiplicies.splice(2, 1, variables[5])
        }

        if (randomTrigonometricFunction == "sin") {
            answer = parseFloat(Math.sin(radianTheta).toFixed(1))
            //alert("sin for " + randomTheta +" is " + answer)
        } else if (randomTrigonometricFunction == "cos") {
            answer = parseFloat(Math.cos(radianTheta).toFixed(1))
            //alert("cos for " + randomTheta +" is " + answer)
        } else {
            answer = parseFloat(Math.tan(radianTheta).toFixed(1))
            //alert("tan for " + randomTheta +" is "+ answer)
        }
        //randomTheta == 90 || 270 || 450 || 630
        if (variables[0] == 2 && randomTrigonometricFunction == "tan" && tanExceptions.indexOf(randomTheta) !== -1) {
            userAnswer = answer
        } else {
            userAnswer *= multiplicies.reduce((a, b) => a * b, 1)
        }

        //finally we just check the answer with yet another if statment...
        if (answer == parseFloat(userAnswer.toFixed(1))) {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Correct"
            document.getElementById("Submit").value = "New Question"
        } else {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Incorrect"
            document.getElementById("Submit").value = "New Question"
        }
    }
}