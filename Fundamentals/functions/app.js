let test = [];
// adding merge conflicts
// here for testing

// multiple arugments 
function printAll(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
printAll(1,2,3,4,5)

//function scope
function greeting(){
    let message = 'Hello';
    console.log(this)
    function sayHi(){
        let message = 'Hi';
        return message;
    };
    console.log(sayHi());
    return message;
}
if(greeting()=== 'Hello'){
    inside = 100;
}
console.log(inside)

//immediately invoked function expression IIFE
a=(function(){
    console.log('IIFE');
})() 

//arrow function 
const arrow = document.querySelector('.arrow');
sum=(a,b) => {  
    return a + b };

let message = {
    name: 'Said',
    regularFunction : function(){
        console.log('Hello Mr. ' + this.name );
    },
    arrowFunction: () => console.log('Hi' + this.name)
}


arrow.innerHTML = `Sum is : ${sum(1,2)}`;
message.regularFunction();
message.arrowFunction();

//function context 

message.gama = function (){
    console.log(this);
}
message.gama();

let test = new greeting();

//call method 
let person1 = {name:'john',age:50};
let person2 = {name:'Tranta',age:21};

let sayHi = function(){
    console.log('Hi, ' + this.name);
}
sayHi.call(person1);
//apply method
let sayHiArray = function(person1,person2){
    console.log('Hi, ' + person1.name +' and ' + person2.name );
}
sayHiArray.apply({person1,person2},[person1,person2])

//bind method 
let player1 = {
    name: 'Neymar',
    getName: function(){
        return this.name;
    }
}
let player2 = {
    name: 'Messi'
}
let getNameCopy = player1.getName.bind(player2);
console.log(getNameCopy())


let x = 2;
let y = 3.547;
let z = 'text'
let d = ' '
let e = undefined;

console.log(eval('x + y + z + d + e'))
console.log(parseInt(x,16))
console.log(parseFloat(y))
console.log(escape(d))
console.log(unescape("%26"))

//rest parameters
function greet(message,...names){
    names.forEach(name=>console.log(message+name))
}  
greet('Selam ','Sami','Halit')
