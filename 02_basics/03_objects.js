
// Singleton (made by constructor)
// Object.create

// Object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Suman",
    "fullname" : "Suman behura",
    age : 18,
    location: "Jagatsinghpur",
    email : "suman786@gmail.com",
    isLoggedin : false,
    lastLogindays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser["email"])

JsUser.greeting = function(){
console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());