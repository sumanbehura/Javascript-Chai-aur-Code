const accountId = 1889637
let accountEmail = "sb63@gmail.com"
var accountPassword = "12345"
accountCity ="Bhubaneswar"
let accountState;


//accountId 2 //not allowed

accountEmail = "bb@gmail.com"
accountPassword = "465465"
accountCity = "Jagatsinghpur"

console.log(accountId);

// prefer not to use var
// because of issue in block scope and functional scope


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


