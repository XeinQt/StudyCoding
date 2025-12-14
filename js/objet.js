const person = {
  firstame: "Rico",
  lastname: "Alentijo",
  age: 24,
};

// console.log(person.firstame);

const tao = {};

tao.firstname = "hotdog";
tao.lastname = "chcickern";
tao.age = 21;

// console.log(tao);

// const animals = new Object({
//   type: "Dog",
//   name: "Cutieee",
// });

// console.log(animals["type"]);

const animals = new Object({
  type: "Dog",
  name: "Cutieee",

  do: function () {
    return "I can run and bark!";
  },
});

// console.log(animals.do());

const car = {
  type: "lambo",
  power: 500,
};

let text = car;

// console.log(text);

class Persons {
  constructor(first, last, age, eye) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
  }

  greet() {
    return `Hello my name is ${this.first}`;
  }
}

const me = new Persons("Rico", "Alentijo", 22, "brown");

console.log(me);
console.log(me.greet());
