const todoInput=document.getElementById('todoInput');
const todoAdd=document.getElementById('todoAdd');
const todoList=document.getElementById('todoList');

function saveTasks(){
  localStorage.setItem('tasks',JSON.stringify([...todoList.querySelectorAll('li')].map(li=>({text:li.firstChild.textContent,completed:li.classList.contains('completed')}))));
}

function loadTasks(){
  const tasks=JSON.parse(localStorage.getItem('tasks')||'[]');
  tasks.forEach(t=>{
    const li=document.createElement('li');
    li.textContent=t.text;
    if(t.completed) li.classList.add('completed');
    addButtons(li);
    todoList.appendChild(li);
  });
}

function addButtons(li){
  const del=document.createElement('button');
  del.textContent='Delete';
  del.onclick=()=>{ li.remove(); saveTasks(); };
  li.appendChild(del);
  li.onclick=e=>{ if(e.target===li){ li.classList.toggle('completed'); saveTasks(); } };
}

todoAdd.addEventListener('click',()=>{
  if(!todoInput.value.trim()) return;
  const li=document.createElement('li');
  li.textContent=todoInput.value;
  addButtons(li);
  todoList.appendChild(li);
  todoInput.value='';
  saveTasks();
});

loadTasks();
