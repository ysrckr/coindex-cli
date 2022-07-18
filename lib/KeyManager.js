import ConfigStore from 'configstore'
import pkg from '../package.json' assert { type: 'json' }
import chalk from 'chalk'

class KeyManager {
	constroctor() {
		this.config = new ConfigStore(pkg.name)
	}

	setKey(key) {
		if (!key) {
			console.log(chalk.red.bold('Please enter a valid key!!!'))
			return
		}
		this.config.set('APIkey', key)
		return key
	}

	getKey() {
		const key = this.config.get('APIkey')
		if (!key) {
			throw new Error('No API key set')
		}
		return key
	}

	removeKey() {
		const key = this.config.get('APIkey')

		if (!key) {
			throw new Error('No API key set')
		}

		this.config.delete(key)

		return
	}
}

export default KeyManager
