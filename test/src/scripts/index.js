import { initTodoListHandlers } from "../scripts/toDolist.js";
import { renderTasks } from "../scripts/render.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);
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