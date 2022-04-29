var variables = [1, 1, 1, 1, 1, 1]
var userAnswer = 1

const trigonometricFunction = ["sin", "cos", "tan"]
const theta = [0, 30, 45, 60, 90, 180, 270, 360]
const coterminal = [0, 1]
var randomTrigonometricFunction = trigonometricFunction[Math.floor(Math.random() * trigonometricFunction.length)]
var randomCoterminal = 360 * coterminal[Math.floor(Math.random() * coterminal.length)]
var randomTheta = theta[Math.floor(Math.random() * theta.length)] + randomCoterminal
var radianTheta = randomTheta * Math.PI / 180

function getQuestion() {
    document.getElementById("theQuestion").innerText = randomTrigonometricFunction + "(" + randomTheta + ")";
}

function disableButton(ID, arrayToBeReplaced, value) {
    if (document.getElementById(ID).style.backgroundColor == "transparent") {
        document.getElementById(ID).style.backgroundColor = "lightgreen"
        variables.splice(arrayToBeReplaced, 1, value)
    } else {
        document.getElementById(ID).style.backgroundColor = "transparent"
        variables.splice(arrayToBeReplaced, 1, 1)
    }
}


function submitAnswer() {
    if (document.getElementById("Submit").value == "Reset") {
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
        userAnswer *= multiplicies.reduce((a, b) => a * b, 1)
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

        if (answer == parseFloat(userAnswer.toFixed(1))) {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Correct"
            document.getElementById("Submit").value = "Reset"
        } else {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Incorrect"
            document.getElementById("Submit").value = "Reset"
        }
    }
}