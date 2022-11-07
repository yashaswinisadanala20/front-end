let todoContainer = document.getElementById("todoContainer");
let inputText = document.getElementById("inputText");
let inputDate = document.getElementById("inputDate");
let inputTime = document.getElementById("inputTime");
let addButton = document.getElementById("addBtn");


let todoList = [{
        text: "Learn aa",
        uniqueNo: 1    
    },
    {
        text: "Learn",
        uniqueNo: 2
    },
    {
        text: "Learn aa",
        uniqueNo: 3
    }
];
let todosCount = todoList.length;

function createTodo(todo) {
    let inputTimeCon = inputTime.value;
    let inputTextCon = inputText.value;

    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row");
    todoContainer.appendChild(todoElement);

    let labelCont = document.createElement("div");
    labelCont.classList.add("label-container", "d-flex", "flex-row", "mb-3", "justify-content-between", "pl-2", "pr-3");
    todoElement.appendChild(labelCont);

    let taCont = document.createElement("div");
    taCont.classList.add("d-flex", "flex-column", "justify-content-center");
    labelCont.appendChild(taCont);

    let labelText = document.createElement("p");
    labelText.textContent = inputTextCon;
    labelText.classList.add("time-text-size");
    taCont.appendChild(labelText);

    let timeCont = document.createElement("div");
    timeCont.classList.add("d-flex", "flex-column", "justify-content-center");
    labelCont.appendChild(timeCont);

    let timeinput = document.createElement("h1");
    timeinput.textContent = inputTimeCon;
    timeinput.classList.add("time-text-size");
    timeCont.appendChild(timeinput);

    console.log(todoElement);
}

function onAddTodo() {
    let inputText = document.getElementById("inputText");
    let userInputValue = inputText.value;

    if (userInputValue === "") {
        alert("Enter Task Name");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };

    createTodo(newTodo);
    inputText.value = "";
    inputTime.value = "";
}
addButton.onclick = function() {
    onAddTodo();

};