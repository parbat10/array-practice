const todoList= [{
        name:'eat',
        dueDate:'2022-12-22'
    },{
        name:'brush',
        dueDate:'2022-12-22'
}];


renderTodolist();

function renderTodolist(){
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
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
