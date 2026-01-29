let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,6,9)
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date(2025,9,6,8,0)
// console.log(myCreatedDate.toLocaleString());


 let createDate = new Date("2025-06-09")
// console.log(createDate.toLocaleString());

// let indianDate = new Date("08-09-2003")
// console.log(indianDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(createDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time `


newDate.toLocaleString("default",{
    weekday:"long",
    // timeZone:
})

