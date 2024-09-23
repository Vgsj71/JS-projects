let todoList=[];

function addTodo()
{
    let inputElement=document.querySelector('#todo-input');
    let todoItem=inputElement.value;
    let dateElement=document.querySelector('#todo-date');
    let todoDate=dateElement.value;
    todoList.push({item: todoItem,
                  dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    display();
}

function display()
{
    let containerElement=document.querySelector('.todo-container');
    let newHtml='';

    for(let i=0; i<todoList.length; i++)
    {
        let { item, dueDate } =todoList[i];//De-structuring

        newHtml +=`
         <span>${item}</span>
         <span>${dueDate}</span>
         <button class="btn-delete" onclick=" todoList.splice(${i},1); display(); ">Delete</button>`;
    }
    containerElement.innerHTML=newHtml;
}

