import taskRenderer from './dom';
import Task from './task';

const addtaskForm = document.querySelector('#addtask-form');
const addtaskBtn = document.querySelector('#addtask-btn');
const tasksContainer = document.querySelector('#tasks-list');

const storedtodoList = JSON.parse(localStorage.getItem('todoList')) || [];

let mytodoList = storedtodoList.map(({
  taskdate, title, description, completedStatus,
}) => new Task(taskdate, title, description, completedStatus));

function renderTask(Task) {
  const rootNode = taskRenderer.createStructure({
    onRemove() {
      mytodoList = mytodoList.filter(item => item !== Task);
      localStorage.setItem('todoList', JSON.stringify(mytodoList));
      rootNode.remove();
    },
    onReadToggle() {
      Task.toggleRead();
      localStorage.setItem('todoList', JSON.stringify(mytodoList));
      taskRenderer.update(rootNode, Task);
    },
  });

  tasksContainer.appendChild(rootNode);
  taskRenderer.update(rootNode, Task);
}

mytodoList.forEach((Task) => renderTask(Task));

function addtaskTotodoList({
  title, description, taskdate, completedStatus,
}) {
  const Task = new Task(taskdate, title, description, completedStatus);

  mytodoList.push(Task);
  localStorage.setItem('todoList', JSON.stringify(mytodoList));

  renderTask(Task);
}

addtaskBtn.addEventListener('click', () => {
  addtaskForm.style.display = 'flex';
});

addtaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskdate = document.querySelector('#taskdate');
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const completedStatus = document.querySelector('#completedStatus');

  addtaskTotodoList({
    taskdate: taskdate.value,
    title: title.value,
    description: description.value,
    completedStatus: completedStatus.checked,
  });

  taskdate.value = '';
  title.value = '';
  description.value = '';
  completedStatus.checked = false;
});
