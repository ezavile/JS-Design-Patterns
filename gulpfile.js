var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');

var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');

var uglify = require('gulp-uglify');

var jade = require('gulp-jade');

var browserify = require('browserify');
var babelify = require('babelify');
var es2015 = require('babel-preset-es2015')

var clean = require('gulp-rimraf');

var config = {
	output: './build',
	styles: {
		main: './src/styles/app.styl',
		output: './build/css',
		watch: './src/styles/*.styl'
	},
	htmls: {
		main: './src/index.jade',
		output: './build',
		watch: './src/*.jade'
	},
	scripts:{
		main: './src/scripts/index.js',
		output: './build/js',
		watch: './src/scripts/**/**/*.js'
	}
};

gulp.task('clean', function(){
	return gulp
				.src(config.output, {read: false})
				.pipe(clean({force: true}));
})

gulp.task('server', function(){
	gulp
		.src(config.output)
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8080
		}));
});

gulp.task('html', function(){
	gulp
		.src(config.htmls.main)
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(config.htmls.output))
		.pipe(livereload());
});

gulp.task('css', function(){
	gulp
		.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css':true
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output))
		.pipe(livereload());
});

gulp.task('js', function() {
	return browserify({
		entries: config.scripts.main,
		"transform": [
      [
        "babelify",
        {
          "presets": [es2015]
        }
      ]
    ]
	})
	.bundle()
	.pipe(source('app.js'))
	.pipe(buffer())
	//.pipe(uglify())
	.pipe(gulp.dest(config.scripts.output));
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(config.styles.watch, ['css']);
	gulp.watch(config.scripts.watch, ['js']);
	gulp.watch(config.htmls.watch, ['html']);
})

gulp.task('default',['clean','server','watch'], function(){
	gulp.start('css','js','html');
})