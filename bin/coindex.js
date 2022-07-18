#!/usr/bin/env node
import { program } from 'commander'
import pkg from '../package.json' assert { type: 'json' }

program
	.version(pkg.version)
	.command('key', 'Manage Api Key -- https://nomics.com')
	.parse(process.argv)
