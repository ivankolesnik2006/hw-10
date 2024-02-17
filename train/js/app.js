const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let positiveSum = 0;
let positiveCount = 0;

for(let i=0; i < arr.length; i++) {
    if(arr[i] > 0) {
        positiveSum += arr[i];
        positiveCount++;
    }
    
}

let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
}

let maxElement = arr[0];
let maxIndex = 0;

for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}

let negativeCount = 0;

for(let i=0; i < arr.length; i++) {
    if(arr[i] < 0){
        negativeCount++;
    }
}


let oddPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        oddPositive++;
    }
}

let evenPositive = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        evenPositive++;
    }
}


let positiveEvenSum = 0;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        positiveEvenSum += arr[i];
    }
}

let positiveOddSum = 0;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        positiveOddSum += arr[i];
    }
}

let multPositive = 1;

for(let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        multPositive *= arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}

console.log("Кількість позитивних елементів:", positiveCount);  
console.log("Сума позитивних елементів:", positiveSum);
console.log("Мінімальний елемент:", minElement, "його порядковий номер:", minIndex);
console.log("Максимальний елемент:", maxElement, "його порядковий номер:", maxIndex);
console.log("Кількість негативних елементів:", negativeCount);
console.log("Кількість непарних позитивних елементів:", oddPositive);
console.log("Кількість парних позитивних елементів:", evenPositive);
console.log("Сума парних позитивних елементів:", positiveEvenSum);
console.log("Сума непарних позитивних елементів:", positiveOddSum);
console.log("Добуток позитивних елементів:", multPositive);
console.log("Масив з обнуленими іншими елементами:", arr);