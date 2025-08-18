const todoList= ['make dinner','wash dishes'];

renderTodolist();

function renderTodolist(){
    let todoListHTML = '';

    for(let i=0; i< todoList.length; i++){
        const todo = todoList[i];
        const html = `
                <p>
                        ${todo}
                        <button onclick="todoList.splice(${i},1);
                        renderTodolist();
                        ">delete</button>
                        
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


    todoList.push(name);
    console.log(todoList);

    inputElement.value='';

    renderTodolist();
}
