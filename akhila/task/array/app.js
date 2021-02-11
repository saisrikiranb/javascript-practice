function isGreater(element) {
    return (element > 0);
}

let numbers = [55, -1, 100, -25, 9, 77].filter(isGreater);
console.log("Value : " + numbers);

function isLesser(element) {
    return (element < 0);
}

let number = [55, -1, 100, -25, 9, 77].filter(isLesser);
console.log("Value : " + number);