import { program } from 'commander'
import Key from '../commands/Key.js'

program
	.command('set')
	.description('Set API Key -- Get at https://nomics.com')
	.action(Key.set)

program.command('show').description('Show API Key').action(Key.show)

program.command('remove').description('Remove API Key').action(Key.remove)

program.parse(process.argv)
