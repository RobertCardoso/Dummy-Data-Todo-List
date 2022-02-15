    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    // console.log(arrayOfTodos[0].userId) // => 14
    // console.log(arrayOfTodos[1].userId) // => 20
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
//     const populateTodos = () => {
//     let todoList = document.getElementById("todo-list")
//     let element = document.createElement("li")
//     let text = document.createTextNode(arrayOfTodos[0].title)
//     element.appendChild(text)
//     todoList.appendChild(element)
//    }

   
const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
    }
}


// Using the assignment from yesterday, create a branch called: " Todo-Filtering ".
// Fetch the same data.
// Store the data in a variable.
// Add an input for the userID. This input should only take in a number from 1 - 10.
// Add a button that when clicked will:
// clear the previous todos from the view
// and populate it with only todos with the userID that matches the number inputted.
// then stores the currently filtered todos in a variable so that ...
// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed

// let newArray {


// }

// const newFetch = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( (response) => response.json())
//     .then( (json) => newArray = json)
// }

const filterTodos = () => {
    clearTodos();
    setUserId();
}

const clearTodos = () => {
    let todos = document.querySelectorAll("li")

    for(let i =0; i<todos.length; i++){
        todos[i].remove()
    }
}

const setUserId = () => {
    const userId = document.getElementById('UserID').value
    console.log("userId is: "+ userId)

    let results = arrayOfTodos.filter(todo => todo.userId===parseInt(userId))
    console.log(results)


    for (let i = 0; i < results.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(results[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
    }
}

const completedTodos = () => {
    clearTodos()

    setCompleted()


}



const setCompleted = () => {
    const completed = document.getElementById()
    let completedRes = results.filter(todo => todo.)
    console.log(completedRes)
    

}