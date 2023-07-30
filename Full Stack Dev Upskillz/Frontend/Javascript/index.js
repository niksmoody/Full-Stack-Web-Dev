console.log("Javascript is amazing🥰");

//Data types: number, "string", boolean, array, objects, undefined

// a = 12.5
console.log(typeof(a));

a = 23;
{
    let a = 45;
    console.log(a);
}

console.log(a);

const obj =
{
    name:"Nikita",
    role: "Full Stack Development",
    
    obj1:
    {
        name:"Vedant",
        arr:[12, 21, "fox"]
    },

    obj2:
    [{
        name: "Nupur"
    }],

    func1:()=>
    {
        console.log(obj.name);
    }
};

console.log(obj.name);
console.log(obj.obj1.name);
console.log(obj.obj1.arr);
console.log(obj.obj1.arr[2]);
console.log(obj.obj2[0]);
console.log(obj.obj2[0].name);
obj.func1();

const ab = [12, 24, "Happy"];
console.log(ab);

//if, else if, else
// == checks value, === value & datatpye
a = 1;
if(a==='1'){
    console.log("Do it");
}

else if(a===2){
    console.log("Done");
}

else{
    console.log("Don't do it");
}


(1==='1') ? console.log("Do it") : console.log("Dont do it");

//3 ways of function
function func1() {
    console.log("Hi");
}

const func2 = function() {
    console.log("Nikita");
}

const func3 =() => {
    console.log("Shitole");
}

const add=(a, b)=>{
    console.log(a+b);
    return ("Done boss");
}

console.log(add(10, 20));

rollno = 27
console.log(`My roll no. is "${rollno}" `);

//String methods
const text = "My name is Nik";
console.log(text.charAt(5));

const val = text.endsWith("nik");
console.log(val);

//for mails
console.log(text.endsWith("@gmail.com"));

console.log(text.lastIndexOf('i')); 
console.log(text.length);
console.log(text.split(" "));

//backticks for next lines
let para = `Dear Mom, 
hope you are doing well.`;
console.log(para);

let x = 2.33251;
console.log(x.toFixed(3));

//arrays
const list1 = [1, 2, 3, 3, 5, 8, "Java", "Niks"];
// console.log(list1.pop());
list1.push(false);
console.log(list1);

list1.shift();
console.log(list1);

list1.unshift("Lemon");
console.log(list1);

//2 arrays combine
const arr1 = [1, 2, 3];
const arr2 = ["Niks", "Vedant", "Nupur"];
console.log(...arr1); //prints values in single line (linear; non-array)
console.log([...arr1, ...arr2]);

//date
const date = new Date();
console.log(date.toLocaleTimeString());
console.log(typeof(date));

//3 loops
const arr = [21, 22, 31, 42, 36, 71]

// for(i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

arr.forEach((val, index, list) =>
{
    console.log(val);
});

arr.map((val, index, list) =>
{
    console.log(val, index);
});

for(i in arr){
    console.log(arr[i]);
}

const moreThan31 = arr.filter((val)=>{
    if(val>31){
        return val;
    }
});
console.log(moreThan31);

a=2;
do{
    //if instead of b a is used, goes till infinite
    b= ++a + a;
    console.log(b);  
}while(a>5);

c = "123";
d = parseInt(c);
//or beee = number();
console.log(c + ": "+ typeof(c));
console.log(d + ": "+ typeof(d));


try{
    e = promts("Enter value of e");
    f - promt("Enter value of f");
}

catch(error){
    console.log("error");
}

//!!!hoisting VERY IMPORTANTT!!!
// k = 2;
console.log(k);
var k = 2;

//can initialize first, declare later

//random object
const home =
{
    firstName: "Nikita",
    lastName: "Shitole",
    roomColor: "Aqua",
    loves: ["Music", "Laptop", "Jaybee", "Books"],
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(home.lastName);
console.log(home.loves);
console.log(home.fullName());

//closures
function name() {
    let h = 34;
    function name1() {
        console.log(h);
    }
}

class Student{
    constructor(id, name, stream, college) {
        this.id = id;
        this.name = name;
        this.stream = stream;
        this.college = college;
    }
};

const Nikita = new Student(27, "Nikita", "CS", "VIT");
console.log(Nikita.id);