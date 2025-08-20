<<<<<<< HEAD

const todoList= [];


=======
const todoList= [{
        name:'eat',
        dueDate:'2022-12-22'
    },{
        name:'brush',
        dueDate:'2022-12-22'
}];
>>>>>>> a8557b7 (almost completed)

renderTodolist();

function renderTodolist(){
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
<<<<<<< HEAD
        const todo = todoList[i];
        const html = `
        <p>
                        ${todo}
                        <button onclick="todoList.splice(${i},1);
                        renderTodolist();
                        ">delete</button>
                        
                    </p>
                `;
=======
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <p>
            ${name} ${dueDate}
            <button onclick="
            todoList.splice(${i},1);
            renderTodolist();
            ">DELETE
            </button>
        </p>
        `;
>>>>>>> a8557b7 (almost completed)
        todoListHTML += html;
        
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML; 
}



function addTodo(){
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;


    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value='';

    renderTodolist();
}
