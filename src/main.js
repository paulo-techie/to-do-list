import taskRenderer from './dom';
import task from './task';

const addtaskForm = document.querySelector('#addtask-form');
const addtaskBtn = document.querySelector('#addtask-btn');
const tasksContainer = document.querySelector('#tasks-list');

const storedtodoList = JSON.parse(localStorage.getItem('todoList')) || [];

let mytodoList = storedtodoList.map(({ taskdate, title, description }) => new task(taskdate, title, description));

function renderTask(Task) {
  const rootNode = taskRenderer.createStructure({
    onRemove() {
      mytodoList = mytodoList.filter(item => item !== Task);
      localStorage.setItem('todoList', JSON.stringify(mytodoList));
      rootNode.remove();
    }
  });

  tasksContainer.appendChild(rootNode);
  taskRenderer.update(rootNode, Task);
}

mytodoList.forEach((Task) => renderTask(Task));

function addtaskTotodoList({
  taskdate, title, description
}) {
  const Task = new task(taskdate, title, description);

  mytodoList.push(Task);
  localStorage.setItem('todoList', JSON.stringify(mytodoList));

  renderTask(Task);
}

addtaskBtn.addEventListener('click', () => {
  addtaskForm.style.display = 'block';
});

addtaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskdate = document.querySelector('#taskdate');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');

  addtaskTotodoList({
    taskdate: taskdate.value,
    title: title.value,
    description: description.value
  });

  taskdate.value = '';
  title.value = '';
  description.value = '';
});


/* get all the task boxes and make them collapsible */

const acc = document.getElementsByClassName('title');

for (let i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
