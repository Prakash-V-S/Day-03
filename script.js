
// ----------------------------------------------DAY 03 TASK 01----------------------------------------------------------------

//how to comare two json have same property without order

let obj1 = { name: "Person", age: 5 };
let obj2 = { age: 5 ,name: "Person"};

// i tried if(obj1 === obj2) but it always return false so i use its keys ----------------

if (obj1.name == obj2.name && obj1.age == obj2.age) { 
    console.log("Both are Same Properties");
} else {
    console.log("Both are Different Properties");
}