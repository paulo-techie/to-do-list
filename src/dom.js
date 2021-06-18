const taskRenderer = {
  createStructure(callbacks = {}) {
    const card = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardBody = document.createElement('div');
    const contentDiv = document.createElement('p');
    const dateDiv = document.createElement('small');
    const removeButton = document.createElement('button');

    removeButton.innerHTML = '<i class="h3 fas fa-trash-alt"></i></h1>';

    card.classList.add('card', 'my-2', 'bg-light');
    cardTitle.classList.add('title', 'card-title', 'm-2', 'btn', 'btn-block', 'text-left', 'font-weight-bolder');
    cardBody.classList.add('card-body', 'bg-white');
    contentDiv.classList.add('content', 'card-text');
    dateDiv.classList.add('date', 'text-secondary', 'float-left');
    removeButton.classList.add('remove', 'btn', 'text-danger', 'float-right');

    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    cardBody.appendChild(contentDiv);
    cardBody.appendChild(dateDiv);
    cardBody.appendChild(removeButton);

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


    titleDiv.innerHTML = `${task.title}`;
    dateDiv.innerHTML = `${task.taskdate}`;
    contentDiv.innerHTML = `${task.description} description.`;
  }
};

export default taskRenderer;