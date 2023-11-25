const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

function fruitSearch() {
    let fruitAnswer = fruits.slice(1, 8);
    return fruitAnswer;
}

console.log(fruitSearch());
