//task 1:

const numArray = { 19, 98, 30, 6, 1 };
console.log ( numArray[0]+ numArray[1]+ numArray[2]+numArray[3]+ numArray[4])

//task 2;

let user1= [
    {
    name: "ani",
    age: 23,
    adress: "tbilisi",
    }
]
let user2=[
    {
    name: "moriz",
    age: 30,
    adress: berlin,
    }
]
let user3= [
    {
    name: "jachym",
    age: 27,
    address: "prague"
    }
]

//task 3:

console.log ('my name is ${user1.name} I am ${user1.age} years old and i live on the ${user1.adress} street.' )
console.log ('my name is ${user2.name} I am ${user2.age} years old and i live on the ${user2.adress} street.' )
console.log ('my name is ${user3.name} I am ${user3.age} years old and i live on the ${user3.adress} street.' )

//task 4:

if (user1.age<19) {
    console.log ("I an a teenager");
} else {
    console.log ("I am an adult");
}

if (user2.age<19) {
    console.log ("I an a teenager");
} else {
    console.log ("I am an adult");
}
if (user3.age<19) {
    console.log ("I an a teenager");
} else {
    console.log ("I am an adult");
}