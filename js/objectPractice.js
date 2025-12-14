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

  const div = document.getElementById("persons");
  let text;
  personList.forEach((per) => {
    text += `
        <h2>${per.first}</h2>
        <h2>${per.last}</h2>
        <h2>${per.age}</h2>
        <h2>${per.eye}</h2>
        <h2>${per.nationality}</h2>
        <br/>
    `;
  });

  div.innerHTML = text;

  inputFirstName.value = "";
  inputLastName.value = "";
  inputAge.value = "";
  inputEyeColor.value = "";
  inputNationality.value = "";
});
