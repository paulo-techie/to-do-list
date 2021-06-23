const taskRenderer = {
  createStructure(callbacks = {}) {
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardFoot = document.createElement('div');
    const contentDiv = document.createElement('p');
    const dateDiv = document.createElement('small');
    const projectDiv = document.createElement('p');
    const removeButton = document.createElement('button');
    const editButton = document.createElement('button');

    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>&nbsp;Delete';
    editButton.innerHTML = '<i class="fas fa-edit"></i>&nbsp;Edit';

    card.classList.add('card', 'my-2', 'bg-light');
    cardTitle.classList.add('title', 'card-title', 'm-2', 'btn', 'btn-block', 'text-left', 'font-weight-bolder');
    cardBody.classList.add('card-body', 'bg-white');
    cardFoot.classList.add('card-body', 'bg-white', 'd-flex', 'justify-content-between');
    contentDiv.classList.add('content', 'card-text');
    dateDiv.classList.add('date', 'text-secondary', 'float-left');
    projectDiv.classList.add('bg-secondary', 'badge', 'text-light', 'project');
    editButton.classList.add('remove', 'btn', 'text-primary', 'text-align-center');
    removeButton.classList.add('remove', 'btn', 'text-danger');

    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardFoot);
    cardBody.appendChild(contentDiv);
    cardBody.appendChild(dateDiv);
    cardFoot.appendChild(projectDiv);
    cardFoot.appendChild(editButton);
    cardFoot.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
      if (callbacks.onRemove) {
        callbacks.onRemove();
      }
    });

    return card;
  },

  update(rootNode, task) {
    const titleDiv = rootNode.querySelector('.title');
    const contentDiv = rootNode.querySelector('.content');
    const dateDiv = rootNode.querySelector('.date');
    const projectDiv = rootNode.querySelector('.project');

    titleDiv.innerHTML = `${task.title}`;
    dateDiv.innerHTML = `${task.taskdate}`;
    contentDiv.innerHTML = `${task.description}`;
    projectDiv.innerHTML = `${task.project}`;
  },
};

export default taskRenderer;