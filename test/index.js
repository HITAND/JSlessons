const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');

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


divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenP);


const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

divElem.addEventListener('click', logGreyDiv);
pElem.addEventListener('click', logGreyP);
spanElem.addEventListener('click', logGreySpan);
