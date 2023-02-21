export const setTitle = text => {
	const title = document.querySelector('.title');
 
	console.log(title.textContent = text);
 };
 
 setTitle('Hello world');