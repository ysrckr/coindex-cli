import inquirer from 'inquirer'
import KeyManager from '../lib/KeyManager.js'
import chalk from 'chalk'

class Key {
	static async set() {
		const keyManager = new KeyManager()
		const input = await inquirer.prompt([
			{
				type: 'input',
				name: 'key',
				message:
					chalk.green('Enter your API key: ') +
					chalk.underline('https://nomics.com'),
			},
		])
		const key = keyManager.setKey(input.key)
		if (key) {
			console.log(`API key set: ${key}`)
		} 
	}
	static show() {
		console.log('show hello')
	}
	static remove() {
		console.log('remove hello')
	}
}

export default Key
