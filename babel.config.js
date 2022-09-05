module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@controllers': './src/controllers',
					'@interfaces': './src/interfaces',
					'@middlewares': './src/repositories',
					'@repositories': './src/repositories',
					'@routes': './src/routes',
					'@services': './src/services',
				},
			},
		],
	],
	ignore: ['**/*.spec.ts'],
};
