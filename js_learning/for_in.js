const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

//console.log(text);

//function hello() {
//    console.log("Hello world");
//}
//hello();
const hello = () => {
    console.log("Hello world");
}
//hello();

function addAll(...numbers){
    let total = 0;
    for(let num of numbers){
        total += num
    }
    return total;
}

//console.log(addAll(1,2,3,4,5));

function myfunc(a) {
    a("shahmir");
}
function myfunc2(name){
    console.log(`my name is ${name}`);
}

//myfunc(myfunc2());
myfunc(myfunc2);