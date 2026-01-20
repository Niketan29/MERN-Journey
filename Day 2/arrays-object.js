const numbers = [10, 90, 30, 40, 50];
//1
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const maxNumber = findMax(numbers);
console.log(maxNumber)


//2
const findMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const minNumber = findMin(numbers);
console.log(minNumber)


//3
const removeDuplicates = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(removeDuplicates([1, 2, 3, 2, 2, 3, 5, 5, 4, 3, 5]))


//4
const flattenArray = (arr) => arr.flat(Infinity);

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));


//5
const frequencyCounter = (arr) => {
    const freq = {};

    for (let item of arr) {
        if (freq[item]) {
            freq[item] = freq[item] + 1;
        }
        else {
            freq[item] = 1;
        }
    }
    return freq;
}
console.log(frequencyCounter([1, 3, 2, 1, 3, 4, 3, 2, 1, 1, 4]))


//6
const sortAsc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(sortAsc([5, 2, 9, 1, 3]));


//7
const sortDec = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(sortDec([5, 2, 9, 1, 3]));


//8
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Fashion" },
    { name: "Phone", category: "Electronics" },
    { name: "Jeans", category: "Fashion" },
];

const groupByCategory = (products) => {
    const categories = products.map((item) => item.category);

    const uniqueCategories = categories.filter(
        (cat, index) => categories.indexOf(cat) === index
    );

    const grouped = uniqueCategories.reduce((acc, category) => {
        acc[category] = products.filter((p) => p.category === category);
        return acc;
    }, {});

    return grouped;
}
console.log(groupByCategory(products));


//

