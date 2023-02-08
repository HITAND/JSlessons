export const event = {
	guests: [
		{ name: 'John', age: 18, email:'examplr@server.com' }
	],
	message:'Welcome to the party!',
	getInvintations() {
		return this.guests
		.filter(({age}) => age >= 18)
		.map(({name, email}) => ({
			email,
			message: `Dear ${name}! ${this.message}`,
		}))
	}
}
