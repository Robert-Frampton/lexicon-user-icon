'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'user-icon.js',
		globalName: 'Lexicon',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-user-icon',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
