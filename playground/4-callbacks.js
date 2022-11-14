setTimeout(() => {
    console.log('2 seconds are up')
}, 2000)

const names = ['Kristen', 'Spencer', 'Matt']

const shortNamres = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

// challenge
const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2
        
        callback(sum)
    })
}

add(1, 4, (sum) => {
    console.log(sum) // should print 5
})
