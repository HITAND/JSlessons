const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
	const eventsListElem = document.querySelector('.events-list');
	eventsListElem.innerHTML += `<span style='color: ${color}; margin-left: 8px;'>${text}</span>`;

	clearBtn.addEventListener('click', () => {
	 eventsListElem.innerHTML = null;
	})
}

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

attachHandlersBtn.addEventListener('click', () => {
divElem.removeEventListener('click', logGreyDiv, true);
divElem.removeEventListener('click', logGreenDiv);

pElem.removeEventListener('click', logGreyP, true);
pElem.removeEventListener('click', logGreenP);

spanElem.removeEventListener('click', logGreySpan, true);
spanElem.removeEventListener('click', logGreenSpan);
})
