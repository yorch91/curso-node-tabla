const { describe } = require('yargs');

const argv = require('yargs')
				.option('b', {
					alias: 'base',
					type: 'number',
					describe: 'Es la base de la tabla de multiplicar'
				})
				.option('l', {
					alias: 'listar',
					type: 'boolean',
					default: 'false',
					describe: 'Muestra la tabla en consola'
				})
				.option('h', {
					alias: 'hasta',
					type: 'number',
					default: '10',
					describe: 'Hasta que multiplicacion mostrar'
				})
				.check((argv, options) =>{
					if( isNaN (argv.b)){
						throw 'La base tiene que ser numerica'
					}
					return true;
				})
				.argv;

module.exports = argv;