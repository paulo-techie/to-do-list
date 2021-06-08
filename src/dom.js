const taskRenderer = {
  createStructure(callbacks = {}) {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const titleDiv = document.createElement('h5');
    const contentDiv = document.createElement('p');
    const removeButton = document.createElement('button');
    const completedStatusToggleButton = document.createElement('button');

    removeButton.innerHTML = 'Remove';

    card.classList.add('card', 'my-3');
    cardBody.classList.add('card-body');
    titleDiv.classList.add('title', 'card-title');
    contentDiv.classList.add('content', 'card-text');
    removeButton.classList.add('remove', 'btn', 'btn-danger', 'mr-2');
    completedStatusToggleButton.classList.add('toggle-read-status', 'btn', 'btn-warning');


    card.appendChild(cardBody);
    cardBody.appendChild(titleDiv);
    cardBody.appendChild(contentDiv);
    cardBody.appendChild(removeButton);
    cardBody.appendChild(completedStatusToggleButton);

    removeButton.addEventListener('click', () => {
      if (callbacks.onRemove) {
        callbacks.onRemove();
      }
    });

    completedStatusToggleButton.addEventListener('click', () => {
      if (callbacks.onReadToggle) {
        callbacks.onReadToggle();
      }
    });

    return card;
  },

  update(rootNode, task) {
    const titleDiv = rootNode.querySelector('.title');
    const contentDiv = rootNode.querySelector('.content');
    const completedStatusButton = rootNode.querySelector('.toggle-read-status');

    titleDiv.innerHTML = `${task.title} (${task.completedStatus ? 'Read' : 'Not Read'})`;
    contentDiv.innerHTML = `By ${task.taskdate}<br /> ${task.description} description.`;
    completedStatusButton.innerHTML = task.completedStatus ? 'Set as unread' : 'Set as read';
  },
};

export default taskRenderer;