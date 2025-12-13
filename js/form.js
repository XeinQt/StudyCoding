const list = document.getElementById("list");

const inputTodo = document.getElementById("inputTodo");
const addTodo = document.getElementById("addTodo");

const todoList = [];

addTodo.addEventListener("click", () => {
  let inputTodoValue = inputTodo.value;

  todoList.push(inputTodoValue);
  renderTodo();
  inputTodo.value = "";
});

function renderTodo() {
  list.innerHTML = "";
  todoList.forEach((todo) => {
    list.innerHTML += ` <h2 id="list"> ${todo}</h2>`;
  });
}
