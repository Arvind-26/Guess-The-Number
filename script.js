let chances
let number

function start() {
    chances = 0
    number = Math.floor(1 + 100 * Math.random())
    console.log(number)
    document.getElementById("dis").style.display = "block"
}

function restart() {
    location.reload()
    start()
}
function game() {
    let guess = document.getElementById("guess").value
    console.log(guess)
    if (guess == "") {
        document.getElementById("out").innerHTML = "Enter a number"
    }
    else if (guess == number) {
        document.getElementById("out").innerHTML = "You have guesses the correct number. The number was " + guess
        document.getElementById("s").style.display = "none"
        document.getElementById("rs").style.display = "inline"
    }
    else if (guess < number) {
        document.getElementById("out").innerHTML = "The number you guesses is smaller than the number"
    }
    else if (guess > number) {
        document.getElementById("out").innerHTML = "THe number you guesses is greater than the number"
    }
    chances++
    if (chances == 10) {
        document.getElementById("chances").innerHTML = "you failed to guess the number"
        document.getElementById("s").style.display = "none"
        document.getElementById("rs").style.display = "inline"
    }
    document.getElementById("chances").innerHTML = "Chances remaining: " + (10 - chances)
}