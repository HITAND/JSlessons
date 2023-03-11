const tasks = getSavedTasks();

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const inputElem = document.querySelector('.task-input');
const createBtnElem = document.querySelector('.create-task-btn');

function haveValue() {
  const valueInputElem = inputElem.value;
  if (!valueInputElem) {
    return;
  }

  tasks.push({
    text: valueInputElem,
    done: false,
    id: Math.random().toString(),
  });

  saveTasks(tasks);
  listElem.innerHTML = '';
  renderTasks(tasks);
}

function checkboxClick(event) {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const taskData = tasks.find(({ id }) => id === taskId);
  Object.assign(taskData, { done: event.target.checked });

  saveTasks(tasks);
  listElem.innerHTML = '';
  renderTasks(tasks);
}

listElem.addEventListener('click', checkboxClick);
createBtnElem.addEventListener('click', haveValue);

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getSavedTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  try {
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  } catch (e) {
    return [];
  }
}
// localStorage.clear()
// localStorage.setItem('name', JSON.stringify('Andrew'))
// localStorage.setItem('name1', JSON.stringify('Andrey'))
// localStorage.setItem('name2', JSON.stringify('Andreu'))

// const getLocalStorageData = () => {
// 	return Object.entries(localStorage).reduce((acc, [key, value]) => {
// 		let newValue;
// 		try {
// 			newValue = JSON.parse(value);
// 		} catch(e) {
// 			newValue = value;
// 		}
// 		return {...acc, [key]: newValue};
// 	}, {});
// }

// console.log(getLocalStorageData())



// const counterElem = document.querySelector('.counter');
// const counterValueElem = document.querySelector('.counter__value');

// const onCounterChange = e => {
// 	const isButton = e.target.classList.contains( 'counter__button');

// 	if (!isButton) {
// 		return;
// 	}

// 	const action = e.target.dataset.action;

// 	const oldValue = Number(counterValueElem.textContent);

// 	const newValue = action === "decrease" 
// 	? oldValue - 1
// 	: oldValue + 1

// 	localStorage.setItem('counterValue', newValue);
// 	counterValueElem.textContent = newValue;
// }

// counterElem.addEventListener('click', onCounterChange);

// const onStorageChange = (e) => {
// counterValueElem.textContent = e.newValue;
// }

// window.addEventListener('storage', onStorageChange);

// const onDocumentLoaded = () => {
// 	counterValueElem.textContent = localStorage.getItem('counterValue');
// 	}

// document.addEventListener('DOMContentLoaded', onDocumentLoaded);