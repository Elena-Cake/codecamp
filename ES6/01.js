
// 1
function checkScope() {
    let i = 'function scope';
    if (true) {
        const i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//  2
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Only change code above this line
}
editInPlace();

// 3
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 4
const magic = () => {
    return new Date();
};
//   5
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

// console.log(myConcat([1, 2], [3, 4, 5]));


// 38
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value = '') {
    if (prop === 'tracks' && value !== '') {
        records[id].tracks ? records[id].tracks.push(value) : records[id].tracks = [value]
    } else if (value !== '') {
        records[id] = {
            ...records[id],
            [prop]: value
        }
    }
    if (value === '') delete records[id][prop]
    // console.log(id, records[id])
}

updateRecords(recordCollection, 2548, "artist", "");

// 39
const myArray = [];
let i = 5
while (i >= 0) {
    myArray.push(i);
    i--;
}
// console.log(myArray)

// 40
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        // console.log(arr[n - 1])
        return sum(arr, n - 1) + arr[n - 1]
    }

    // Only change code above this line
}
// console.log(sum([2, 3, 4, 5], 3))