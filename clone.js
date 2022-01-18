const person = {
    name: 'John',
    age: 21
}


// using reference
let personReference = person

console.log('Using reference ',personReference)

// using spread clone
let usingSpreadClone = {...person}

console.log('Using spread clone ',usingSpreadClone)

// using assign object clone
let assignObjectClone = Object.assign({}, person)

console.log('Using assign object clone ',assignObjectClone)

// using stringify clone
let stringifyClone = JSON.parse(JSON.stringify(person))

console.log('Using stringify clone ',stringifyClone)


