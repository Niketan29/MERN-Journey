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


//9
const obj1 = {
    name: "Niketan",
    age: 23
}

const obj2 = {
    name: "Ram",
    age: 22
}

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }
}
console.log(mergeObjects(obj1, obj2))



//10
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

const player = {
    name: "Virat",
    jNo: 18,
    profile: { Country: "India" }
}

const copyPlayer = deepClone(player);

copyPlayer.profile.Country = "USA";

console.log(player.profile.Country)
console.log(copyPlayer.profile.Country)


//11
const getNestedValues = (obj, path) => {
    const keys = path.split(".");
    let result = obj;

    for (let i = 0; i < keys.length; i++) {
        result = result[keys[i]];

        if (result === undefined) {
            return undefined
        }
    }
    return result
}

const person = {
    profile: {
        address: {
            city: "Mumbai"
        }
    }
};

console.log(getNestedValues(person, "profile.address.city"));
console.log(getNestedValues(person, "profile.address.pincode"));



//12
const orders = [
    { id: 1, user: "Niketan", total: 500, status: "delivered" },
    { id: 2, user: "Riddhi", total: 1200, status: "pending" },
    { id: 3, user: "Niketan", total: 800, status: "pending" },
    { id: 4, user: "Aman", total: 300, status: "delivered" },
];

const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

const pendingOrders = orders.filter((order) => order.status === "pending");

const deliveredOrders = orders.filter((order) => order.status === "delivered");

const revenueByUser = orders.reduce((acc,order)=>{
    if(acc[order.user]){
        acc[order.user] = acc[order.user] + order.total;
    }
    else{
        acc[order.user] = order.total;
    }
    return acc;
},{})

console.log("totalRevenue:", totalRevenue);
console.log("pendingOrders:", pendingOrders);
console.log("deliveredOrders:", deliveredOrders);
console.log("revenueByUser:", revenueByUser);