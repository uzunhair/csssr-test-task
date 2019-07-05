module.exports = {
	root: true,
	modules: {
		"bem-tools": {
			plugins: {
				create: {
					templateFolder: '.bem/templates',
					techs: ["pug", "scss", "js"],
					levels: {
						"src/blocks/modules": {
							default: true
						}
					}
				}
			}
		}
	}
};