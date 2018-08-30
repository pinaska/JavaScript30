const myArray=[1,2,3];
//watch out listener on click
const result = myArray.map((number, index)=>number + index);
console.log(result)

//defualt paramatere, you can call the function even without the arguments, becuase default paramaeters will produce the outcomes
function showData(name = "kate", language = "JS"){
    console.log(name, language);
}

showData();

//spread operator
const names = ['kate', 'kuba'];
const numbers = [10, 100];

const result2 = [...names, 4, 5, 5, ...numbers];
console.log(result2);

// operator rest
function sum(...numbers){
    console.log(numbers);
}
sum(1,4,23, 563432432);

//template litterals
const name = 'Kate';
console.log(`my name is ${name}`);

//destructering getting data from object and array
const myArr = [1, 2, 'kate'];
const [v1, v2,v3]= myArr;
console.log(v1, v2,v3);

const obj={
    name1:'Kate',
    language: 'JS'
}
//getting data using keys
const {name1, language} = obj;
console.log(name1, language);

//classes, nakładka na prototyp
class Car{
    constructor(model, speed){
        this.model = model;
        this.speed = speed;

    }
    showInfo(){
        console.log(`car ${this.model} has max speed ${this.speed}`)
    }
}
const trabant = new Car('trabant', '100');
trabant.showInfo();





