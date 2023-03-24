const loginFrom = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');

const urlBase = 'https://641c4f4db556e431a86b2ad9.mockapi.io/api/v1/users';

function funcLogin(e) {
	e.preventDefault();
	const formData = Object.fromEntries(new FormData(loginFrom));
	const newUser = {
		email: formData.email,
		Name: formData.name,
		Password: formData.password,
	 };
	asincFunc(newUser)
	.then((response) => response.json())
	.then((data) => alert(JSON.stringify(data)))
	.finally(() => loginFrom.reset());
}

function asincFunc(obj) {
		return fetch(urlBase, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		}
	});
}

function funcValid() {
	const isValid = loginFrom.reportValidity();

	isValid ? (submitButton.disabled = false) : (submitButton.disabled = true);

	if (!submitButton.hasAttribute("disabled")) {
		submitButton.setAttribute("enabled", "");
	}
}

document.addEventListener('submit', funcLogin);
document.addEventListener('input', funcValid);



