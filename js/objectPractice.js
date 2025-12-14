//text
const persons = document.getElementById("persons");
//inputs
const inputFirstName = document.getElementById("inputFirstName");
const inputLastName = document.getElementById("inputLastName");
const inputAge = document.getElementById("inputAge");
const inputEyeColor = document.getElementById("inputEyeColor");
const inputNationality = document.getElementById("inputNationality");
//button
const add = document.getElementById("add");

const personList = [];

class Personss {
  constructor(first, last, age, eye, nationality) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
    this.nationality = nationality;
  }
}

add.addEventListener("click", () => {
  let first = inputFirstName.value;
  let last = inputLastName.value;
  let age = inputAge.value;
  let eye = inputEyeColor.value;
  let nationality = inputNationality.value;

  personList.push(new Personss(first, last, age, eye, nationality));
  console.log(personList);
});
