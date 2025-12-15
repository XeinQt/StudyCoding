const personText = document.getElementById("personText");
const searchButton = document.getElementById("searchButton");
const foundPerson = document.getElementById("foundPerson");

const persons = ["Rico", "Jhon", "chin2", "jaijai"];

personText.addEventListener("input", () => {
  const personInputSearch = personText.value;
  const filterPerson = persons.filter((person) =>
    person.includes(personInputSearch)
  );

  if (filterPerson.length > 0 && personInputSearch !== "") {
    foundPerson.innerText = filterPerson.join(", ");
  } else if (personInputSearch === "") {
    foundPerson.innerText = "";
  } else {
    foundPerson.innerText = "Person not found!";
  }
});
