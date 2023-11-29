const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let numbersAnswer = [];

for (let x = 0; x < numbers.length; x++ ) {
    for (let y = 0; y < numbers[x].length; y++) {
        if (numbers[x][y] % 2 === 0) {
            numbersAnswer.push(numbers[x][y]);
        }
    }
}

console.log(numbersAnswer);
