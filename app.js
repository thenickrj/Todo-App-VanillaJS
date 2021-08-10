// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  //   console.log(event);
  console.log(todoInput.value);
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   Create LI
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   Check MArk button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //   Check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append to list
  todoList.append(todoDiv);
  //   Clear todo Input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //   delete todo
  if (item.classList[0] == "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    // todo.remove();
  }
  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }
