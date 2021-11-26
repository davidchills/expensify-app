
// Object Destructuring
// const person = {
// 	name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'Philadelphia',
// 		temp: 92
// 	}
// }

// const { name: firstName = 'Anonymous', age } = person
// const { city, temp: temperture } = person.location

// console.log(`${firstName} is ${age}.`)
// console.log(`It's ${temperture} in ${city}.`)

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array Destructuring

// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147']

// //const [street, city, state, zip] = address
// const [, city, state = 'New York'] = address

// console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)
