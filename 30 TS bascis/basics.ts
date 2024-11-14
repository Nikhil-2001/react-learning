//Primitive data types are boolean number string

let age: number;
age = 12
let userName : string
userName = '12'

let hobbies: string[]; //Array of strings

hobbies = ['Sports', 'Cooking']

let person: {
    name: string,
    age: number
}  // Object type we can make it array of ojects by appending []

//default type is any if data type is not specified

// Type inference is done by typescript without mentioning it explicitly

let course = 'React typescript course'
// course = 12 this will lead to error

// If we want to allow more than one type we can achieve it by using union type

let courses: string | number = 'React course'
courses = 12 // this is valid

// if we want to duplicate a type at mulitle places we can first define the base type and reuse it but this will be removed in the final js compiled file

type Person = {
    name: string,
    age: number
}

let person1: Person;
let persons: Person[]

function add(a: number, b: number) {
    return a+b   // it explicitly infers the return type as number 
}

// Generics

function insertAtBegining<T>(array: T[], value: T) {
    const newAray = [value, ...array]
    return newAray
}

const demoArray = [1,2,3]
const updatedArray = insertAtBegining(demoArray, 1) // Adding a string doesn't work so for functions with help of generics can help achieve type saety
 





