const string = 'Tom';
const number = 1;
const array = [0, 1, 2, 3, 'str', {}];
const obj = { key: 'value', arr: array };

function func (p0, p1, p2) {
    console.log(p0, p1, p2);
}

func(0, 1, 2);

function add2 (num0, num1) {
    const sum = num0 + num1;
    console.log(num0 + '+' + num1 + '=' + sum);
    return sum;
} //一個函數

var sum0 = add2(-1, -2); //執行函數, sum=-3
console.log(sum0);
var sum1 = add2(1, 2);
console.log(sum1); 

var sayHello = function () {
    // const this = person;
    console.log(this);
    console.log('Hi! my name is ' + this.name);
    window.setTimeout(() => { //會往外找this
        console.log('My age is ' + this.age);
    }, 1 * 1000);
    // window.setTimeout(function () { //不會往外找this
    //     const this = undefined;
    //     console.log('My age is ' + this.age);
    // }, 1 * 1000);
}


const sayHi = () => {
    // console.log(this);
    console.log('Hi! my name is ' + this.name);
};

var getName = function () {
    return 'My name is ' + this.name + ' , ' + 'My gender is ' + this.gender + ' , ' + 'My age is ' + this.age;
}

  const person = {//object
    name: 'Tom',
    gender: 'boy',
    age: 35,
    sayHello,
    sayHi,
    getName,
  };
  
  const person1 = {
    name: 'John',
    gender: 'boy',
    age: 25,
    getName,
    sayHello,
    sayHi,
  };

  console.log( person.getName() );
  console.log( person1.getName() );


//this運用
var getGender = function() {
    return 'My name is ' + this.name + ' , ' + 'My gender is ' + this.gender + ' , ' + 'My age is ' + this.age;
  };
  
  var people1 = {
    name: 'Amy',
    gender: 'female',
    age: 22,
    getGender,
  };
  
  var people2 = {
    name: 'Mike',
    gender: 'male',
    age: 34,
    getGender,
  };
  
  console.log( people1.getGender() );
  console.log( people2.getGender() );