// membuat function dengan parameter dan return value
function sayHelloWorld(firstaName, lastName){
    const say = `Hello ${firstaName} ${lastName}`
    return say
}

// memanggil function dan menangkap return value
const result = sayHelloWorld('Fadhlu', 'Ibnu')
console.log(result)

function isContains(array, searchValue) {
    for (const elemet of array) {
        if (elemet === searchValue) {
            return true
        }
    }

    return false
}

console.log(isContains([1,2,3,4,5,6,7,8,9], 5))