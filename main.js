
// let sampleString = "Lester Sugay";
// let sampleArray = ["lester", "Tey", "Zyrine"];
// let sampleArrayNumbers = [1, 12, 15, 18, 20];

// alert(sampleArray.length);

// in the string it counts yung number of characters 
// In Array it counts the number of items inside the array


// alert(sampleString.toUpperCase());
// alert(sampleString.toLowerCase());

// toUpperCase turns the string ti capitalized words
// toLowerCase turns the string ti capitalized words


// alert(sampleString.replace('Lester', 'Jan'));
// .replace helps you replace the selected part of the string


// alert(sampleString.slice(0, 8));
// alert(sampleString.substring(0, 8));
// extracts a part of your string two parameters (start , end)
// Substings is flexible pwede mag baligtad si start and end



// ARRAY METHODS!!!

// let checkNumbers = (num) => {
//     return num < 21;
// }
// alert(sampleArrayNumbers.every(checkNumbers));

// check if each item in the array satisfies the given condition


// alert(sampleArray.fill("Fiona"));

// alert(sampleArray.fill('Fiona', 0, 1));

// Fills for the seleceted items

// let checkNumbers = (num) => {
//     return num < 20;
// }
// alert(sampleArrayNumbers.filter(checkNumbers));

// Normal Mode

// alert(sampleArrayNumbers.filter(
//     (num) => {
//         return num < 15;
//         }
//     )
// )

// let checkNumbers = (num) => {
//     return num < 15;
// }
// alert(sampleArrayNumbers.find(checkNumbers));

// Normal find method format

// alert(sampleArrayNumbers.find(
//     (num) => {
//         return num < 15;
//         }
//     )
// )

// Method na nasa loob yung function 


// let animals = ['dog', 'cat', 'dinosaur', 'platypus'];

// for (let i = 0; i < animals.length; i++) {
//     alert(animals[i]);
// 

// Using Normal loop

// let showAnimals = (name, number) => {
//     alert('${number} ${animals}');
// };

// animals.forEach(showAnimals);

// Normal For each

// animals.forEach(
//     (name) => {
//         alert(`${name}`);
//     }
// );

// animals.push('Kangaroo');
// animals.push('Unggoy');
// push allows you to add in your array ( dagdag sa let )
// animals.pop();
// animals.pop();
// animals.pop();
// .pop removes the last item in your array ( bawas sa let )

// alert(animals);


// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Magbreak"];

// let todo = [];

// if(localStorage.getItem("todo")){
//     todo = localStorage.getItem("todo").split(",");
// }

// let todo = localStorage.getItem("todo").split(",");

// let container = document.querySelector("#todo-list");

// todo.forEach(
//     (task) => {
//         container.innerHTML += `<li>${task}</li>`;
//     }
// );


// const showList = () =>{
//     container.innerHTML = "";
//     todo.forEach(
//         (task) => {
//             container.innerHTML += `<li>${task}</li>`;
//         }
//     );
    // simplify the line item 137 - 143 and 149 - 154
    // create a function for them,

// }


// const addTodo = () => {
//     let newItem = document.querySelector("#create-todo").value;
//     todo.push(newItem);
//     // alert(todo);
//     // container.innerHTML += `<li>${newItem}</li>`;
//     // container.innerHTML = "";
//     // todo.forEach(
//     //     (task) => {
//     //         container.innerHTML += `<li>${task}</li>`;
//     //     }
//     // );
//     showList();
//     localStorage.setItem("todo", todo);
// }

// const removeTodo = () => {
//     todo.pop();
    // container.innerHTML = "";
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    // showList();
    // localStorage.setItem("todo", todo);
// }

// showList();


// LOCAL STORAGE WEB API

// localStorage.setItem("name", "Sample Name");


// let data = localStorage.getItem("name");

// alert(data);


// let todo = [];

// if(localStorage.getItem("todo")){
//     todo = localStorage.getItem("todo").split(",");
// }

// const container = document.querySelector("#todo-list");

// const showList = () =>{
//     container.innerHTML = "";
//     todo.forEach(
//         (task) => {
//             container.innerHTML += `<li>${task}</li>`;
//         }
//     );
// }

// const addTodo = () => {
//     const newItem = document.querySelector("#create-todo").value.trim();
//     if (newItem !== "") {
//         todo.push(newItem);
//         showList();
//         localStorage.setItem("todo", todo);
//     }
//     document.querySelector("#create-todo").value = "";
// }

// const removeTodo = () => {
//     if (todo.length > 0) {
//         todo.pop();
//         showList();
//         localStorage.setItem("todo", todo);
//     }
// }

// const searchTodo = () => {
//     const searchInput = document.querySelector("#search-todo").value.trim().toLowerCase();
//     const filteredTasks = todo.filter(task => task.toLowerCase().includes(searchInput));
//     showList(filteredTasks);
// }
// showList();
// function showAddTab() {
//     document.getElementById("add-tab").style.display = "block";
//     document.getElementById("remove-tab").style.display = "none";
//     document.getElementById("search-tab").style.display = "none";
// }

// function showRemoveTab() {
//     document.getElementById("add-tab").style.display = "none";
//     document.getElementById("remove-tab").style.display = "block";
//     document.getElementById("search-tab").style.display = "none";
// }

// function showSearchTab() {
//     document.getElementById("add-tab").style.display = "none";
//     document.getElementById("remove-tab").style.display = "none";
//     document.getElementById("search-tab").style.display = "block";
// }
// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Magbreak"];

// const renderTodoList = () => {
//     const todoList = document.getElementById("todo-list");
//     todoList.innerHTML = "";
//     todo.forEach(task => {
//         const listItem = document.createElement("li");
//         listItem.textContent = task;
//         todoList.appendChild(listItem);
//     });
// };

// const addTask = () => {
//     const newTask = document.getElementById("new-task").value.trim();
//     if (newTask !== "") {
//         todo.push(newTask);
//         renderTodoList();
//         document.getElementById("new-task").value = "";
//     }
// };

// const removeLastTask = () => {
//     if (todo.length > 0) {
//         todo.pop();
//         renderTodoList();
//     }
// };

// const searchTask = () => {
//     const searchTerm = document.getElementById("search-task").value.toLowerCase();
//     const filteredTasks = todo.filter(task => task.toLowerCase().includes(searchTerm));
//     const todoList = document.getElementById("todo-list");
//     todoList.innerHTML = "";
//     filteredTasks.forEach(task => {
//         const listItem = document.createElement("li");
//         listItem.textContent = task;
//         todoList.appendChild(listItem);
//     });
// };

// document.addEventListener("DOMContentLoaded", renderTodoList);

// let todo = [];

// if (localStorage.getItem("todo")) {
//     todo = JSON.parse(localStorage.getItem("todo"));
// }

// const renderTodoList = () => {
//     const todoList = document.getElementById("todo-list");
//     todoList.innerHTML = "";
//     todo.forEach(task => {
//         const listItem = document.createElement("li");
//         listItem.textContent = task;
//         todoList.appendChild(listItem);
//     });
// };

// const addTask = () => {
//     const newTask = document.getElementById("new-task").value.trim();
//     if (newTask !== "") {
//         todo.push(newTask);
//         localStorage.setItem("todo", JSON.stringify(todo));
//         renderTodoList();
//         document.getElementById("new-task").value = "";
//     }
// };

// const removeLastTask = () => {
//     if (todo.length > 0) {
//         todo.pop();
//         localStorage.setItem("todo", JSON.stringify(todo));
//         renderTodoList();
//     }
// };

// const searchTask = () => {
//     const searchTerm = document.getElementById("search-task").value.toLowerCase();
//     const filteredTasks = todo.filter(task => task.toLowerCase().includes(searchTerm));
//     const todoList = document.getElementById("todo-list");
//     todoList.innerHTML = "";
//     filteredTasks.forEach(task => {
//         const listItem = document.createElement("li");
//         listItem.textContent = task;
//         todoList.appendChild(listItem);
//     });
// };

// document.addEventListener("DOMContentLoaded", renderTodoList);
let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Magbreak"];

if (!localStorage.getItem("todo")) {
    localStorage.setItem("todo", JSON.stringify(todo));
} else {
    todo = JSON.parse(localStorage.getItem("todo"));
}

const renderTodoList = () => {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todo.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        todoList.appendChild(listItem);
    });
};

const addTask = () => {
    const newTask = document.getElementById("new-task").value.trim();
    if (newTask !== "") {
        todo.push(newTask);
        localStorage.setItem("todo", JSON.stringify(todo));
        renderTodoList();
        document.getElementById("new-task").value = "";
    }
};

const removeLastTask = () => {
    if (todo.length > 0) {
        todo.pop();
        localStorage.setItem("todo", JSON.stringify(todo));
        renderTodoList();
    }
};

const searchTask = () => {
    const searchTerm = document.getElementById("search-task").value.toLowerCase();
    const filteredTasks = todo.filter(task => task.toLowerCase().includes(searchTerm));
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    filteredTasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        todoList.appendChild(listItem);
    });
};

document.addEventListener("DOMContentLoaded", renderTodoList);