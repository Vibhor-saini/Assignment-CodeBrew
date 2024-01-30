// Q4: Differences between let , const , var

// Using var(Var has function scope)---------------------------------------
// Due to its function-scoped nature and potential issues with hoisting,var is often avoided in modern JavaScript development.

var x = 10;
if (true) {
    var x = 20; // Same variable x is used
    console.log(x); // Outputs will be 20
}
console.log(x); // Outputs will be 20



// Using let(let has block scope.)-------------------------------------------
let y = 10;
if (true) {
    let y = 20; // Different variable y is used within this block
    console.log(y); // Outputs will be 20
}
console.log(y); // Outputs will be 10



// Using const----------------------------------------------------------------
const z = 10;
z = 20;    //This would result in an error - const variables cannot be reassigned
console.log(z);







