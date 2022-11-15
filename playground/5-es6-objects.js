// Object property shorthand

const myName = 'Kristen'
const userAge = 24

const user = {
    name: myName,
    age: userAge,
    location: 'Victoria'
}

console.log

// Object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label: productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)