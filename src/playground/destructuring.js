//Object Destructuring

// const book={
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
    
// }

// const {name:publisherName='Anonymous'}=book.publisher;

// console.log(`${publisherName}`);

// console.log('destructuring');

// const person={
//     name: undefined,
//     age:   36,
//     location: {
//         city: 'Pune',
//         temperature: 36
//     }
// }

// const {name='Anonymous',age}=person;
// const {city,temperature: temp}=person.location;

// console.log(`${name} is ${age}.`);

// console.log(`Temperature is ${temp} degree celcius in ${city}! `);

// Array Destructuring

const item=['Coffee (hot)', '$2.00','2.50','3.00'];

const [itemName,smallPrice,,]=item;

console.log(`Price of small ${itemName} is ${smallPrice}.`);