
const todoList= ['make dinner','wash dishes'];



renderTodolist();

function renderTodolist(){
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
        const todo = todoList[i];
<<<<<<< HEAD
        const html = `
                <p>
                        ${todo}
                        <button onclick="todoList.splice(${i},1);
                        renderTodolist();
                        ">delete</button>
                        
                    </p>
                `;

        const html = `<p>
        ${todo}
        <button onclicl="
        todoList.slice(`${i},1`);
        renderTodolist();
        ">delete</button>
        </p>`;
>>>>>>> fe56b21371d2dd3de4dbeada8116879f8d85f330
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML; 
}



function addTodo(){
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;


    todoList.push(name);
    console.log(todoList);

    inputElement.value='';

    renderTodolist();
}
