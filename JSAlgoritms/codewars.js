function dropCap(n) {
    const arr = n.split(' ').map(i => {
        if (i = '') return ' '
        const text = i.lenght > 2 ? i[0].toUpperCase() + i.slice(1).toLowerCase() : i.toLowerCase()
        console.log(i[0].toUpperCase() + i.slice(1).toLowerCase())
        return i.lenght > 2 ? i[0].toUpperCase() + i.slice(1).toLowerCase() : i.toLowerCase()
    })

    // console.log(arr.join(''))
}

// dropCap('more  thAn ')

function printArray(array) {
    //show me the code!
    return array
}

// console.log(printArray([[1, 2], ["a", "b"]]))

function removeEveryOther(arr) {
    const ar = []
    arr.forEach((item, i) => { if (i % 2 === 0) ar.push(item) })
    return ar
}
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));


var capitals = function (word) {
    const arr = []
    word.split('').forEach((item, i) => { if (item.toUpperCase() === item) arr.push(i) })
    return arr
};
// console.log(capitals('CodEWaRs'))

function billboard(name, price = 30) {
    return name.split('').reduce((res, item) => res + price, 0)
}

// console.log(billboard("Jeong-Ho Aristotelis"));