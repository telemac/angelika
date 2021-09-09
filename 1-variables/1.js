// convert a string to a number
let s = "123"
let n = parseInt(s)
// n = s*1
// console.log("n", typeof n, n)

// -------------------------------------------------------

// Voir lien : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions


// simple string concatenation function
function sayHello(name) {
	return "Hello " + name;
}

const sayHello2 = (name) => {
	return "Hello " + name;
}

const helloStr = sayHello2("Angelika")
console.log(helloStr)

const minus = (a, b) => {
	if (a < b) {
		return a
	}
	return b
}

const n1 = 12
const result = minus(n1, 4)
console.log(result)

// ---------------------------------------------
// voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
// parameters : name,age
// return value : Hello my name is Angelika, i am 51 
const introduceMyself = (name, age) => {
	// return "Hello my name is " + name + ", i am " + age;
	return `Hello my name is ${name}, i am ${age}`;
}

// variables de type object
const angelika = {name: "Angelika", age: 51}
const alexandre = {name: "Alexandre", age: 54}
const marcel = {name: "Marcel", age: 99}

// variable de type array
const persons = [angelika, alexandre, marcel]
// console.log("persons", Object.prototype.toString.call(persons), persons)

// incrémentation / décrémentation
// let n = 0
// n++
// n--
// n+=2
// n-=2 -> n = n-2

// calcul de la somme de l'age des personnes
// let sommeDesAges = 0
// for (let n=0; n < persons.length; n++ ) { // boucle à l'ancienne...
// 	const person = persons[n]
// 	sommeDesAges = sommeDesAges + person.age
// 	console.log("personne", `n=${n}`, person.age,`sommeDesAges=${sommeDesAges}`)
// }
// console.log("sommeDesAges = ", sommeDesAges)

// voir : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of
// let sommeDesAges = 0
// for ( person of persons ) { // boucle avec of
// 	sommeDesAges = sommeDesAges + person.age
// 	console.log("personne", person.age,`sommeDesAges=${sommeDesAges}`)
// }
// console.log("sommeDesAges = ", sommeDesAges)

// boucle avec forEach
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
let sommeDesAges = 0

persons.forEach((person) => {
	sommeDesAges += person.age
	const cv =  introduceMyself(person.name, person.age)
	console.log(cv)
})
console.log("sommeDesAges = ", sommeDesAges)

console.log('----------------------------------------------------')

