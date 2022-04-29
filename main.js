var variables = [1, 1, 1, 1, 1, 1]

function disableButton(ID, arrayToBeReplaced, value) {
    if (document.getElementById(ID).style.backgroundColor == "transparent") {
        document.getElementById(ID).style.backgroundColor = "lightgreen"
        variables.splice(arrayToBeReplaced, 1, value)
    } else {
        document.getElementById(ID).style.backgroundColor = "transparent"
        variables.splice(arrayToBeReplaced, 1, 1)
    }
}

var answer = 1

function submitAnswer() {
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
    answer *= multiplicies.reduce((a, b) => a * b, 1)
    alert(answer)
}