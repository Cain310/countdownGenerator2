var countdownGenerator = function (x) {
    var list = ["T-minus 3...", "T-minus 2...", "T-minus 1...", "Blast Off!", "Rockets already gone, bub!"];
    var index = 0
    return function () {
        var countingDown = list[index]
        index++
        if (index > 4) {
            return list[4];
        } else if
            (index <= 4) {
            return countingDown;
        }
    }
}

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown());
console.log(countdown());
console.log(countdown());
