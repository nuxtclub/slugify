import path from 'path'

export default function (moduleOptions) {
	const options = Object.assign({}, this.options.slugify, moduleOptions)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options: {
			...options,
			options: options,
		},
	})
}

module.exports.meta = require('../package.json')
