﻿export const event = {
	guests: [
		{name: 'Tom', email:'t@gmail.com', age: 17},
		{name: 'Bob', email:'b@gmail.com', age: 18},
	],
	message:'Welcome to the party',
	getInvintations() {
		return this.guests
		.filter(({age}) => age >= 18)
		.map(({name, email}) => ({
			email,
			text: `Dear ${name}! ${this.message}!`,
		}))
	}
}