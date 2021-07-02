import taskRenderer from './dom';
import ToDo from './task';

const addtaskForm = document.querySelector('#addtask-form');
const addtaskBtn = document.querySelector('#addtask-btn');
const tasksContainer = document.querySelector('#tasks-list');
const projectsContainer = document.getElementById('project-container');
// const values = [];

const select = document.createElement('input');
select.setAttribute('name', 'projects');
select.setAttribute('list', 'projects');
select.setAttribute('id', 'project');

const label = document.createElement('label');
label.innerHTML = 'Project: ';
label.htmlFor = 'projects';

const projectOptions = document.createElement('datalist');
projectOptions.setAttribute('id', 'projects');

projectsContainer.appendChild(label).appendChild(select);
projectsContainer.appendChild(projectOptions);

const storedtodoList = JSON.parse(localStorage.getItem('todoList')) || [];

let mytodoList = storedtodoList.map(({
  taskdate, title, description, project,
}) => new ToDo(taskdate, title, description, project));

// for (let i=0; i < mytodoList.length ; ++i)
//   values.push(mytodoList[i]['project']);

// for (const val of values) {
//   const option = document.createElement('option');
//   option.value = val;
//   option.text = val.charAt(0).toUpperCase() + val.slice(1);
//   projectOptions.appendChild(option);
// }

function renderTask(Task) {
  const rootNode = taskRenderer.createStructure({
    onRemove() {
      mytodoList = mytodoList.filter(item => item !== Task);
      localStorage.setItem('todoList', JSON.stringify(mytodoList));
      rootNode.remove();
    },

    onEdit() {
      const taskdate = document.querySelector('#taskdate');
      const title = document.querySelector('#title');
      const description = document.querySelector('#description');
      const project = document.querySelector('#project');
      const updateTaskBtn = document.querySelector('#submit-btn');
      const editItem = mytodoList.find(item => item === Task);

      taskdate.value = editItem.taskdate;
      title.value = editItem.title;
      description.value = editItem.description;
      project.value = editItem.project;
      addtaskForm.style.display = 'block';
      updateTaskBtn.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Update</button>';
    }
  });


  tasksContainer.appendChild(rootNode);
  taskRenderer.update(rootNode, Task);
}

mytodoList.forEach((Task) => renderTask(Task));

function addtaskTotodoList({
  taskdate, title, description, project,
}) {
  const Task = new ToDo(taskdate, title, description, project);

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
  const project = document.querySelector('#project');

  addtaskTotodoList({
    taskdate: taskdate.value,
    title: title.value,
    description: description.value,
    project: project.value,
  });

  taskdate.value = '';
  title.value = '';
  description.value = '';
  project.value = '';
});

/* get all the task boxes and make them collapsible */

const acc = document.getElementsByClassName('title');

for (let i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function togglePanel() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

