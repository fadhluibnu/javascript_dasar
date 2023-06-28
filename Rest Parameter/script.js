function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

sum('Jeruk', 10,20,30,40,50, 60)

const values = [10,20,30,40,50,60]

sum('Orange', ...values)