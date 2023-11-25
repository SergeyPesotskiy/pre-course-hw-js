const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function fruitSearch() {
    let fruitAnswer = words.indexOf("апельсин");
    if (fruitAnswer !== -1) { return 'Ура! нашел';
    } else { return 'Придется поискать в другом магазине…';
    }
}

console.log(fruitSearch());
