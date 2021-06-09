const taskRenderer = {
  createStructure(callbacks = {}) {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const titleDiv = document.createElement('h5');
    const contentDiv = document.createElement('p');
    const removeButton = document.createElement('button');

    removeButton.innerHTML = 'Remove';

    card.classList.add('card', 'my-3');
    cardBody.classList.add('card-body');
    titleDiv.classList.add('title', 'card-title');
    contentDiv.classList.add('content', 'card-text');
    removeButton.classList.add('remove', 'btn', 'btn-danger', 'mr-2');


    card.appendChild(cardBody);
    cardBody.appendChild(titleDiv);
    cardBody.appendChild(contentDiv);
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

    titleDiv.innerHTML = `${task.title}`;
    contentDiv.innerHTML = `${task.taskdate}<br /> ${task.description} description.`;
  },
};

export default taskRenderer;