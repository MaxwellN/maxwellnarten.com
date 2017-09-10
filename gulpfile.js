"use-strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var autoprefixer  = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var slim = require("gulp-slim");
var watch = require('gulp-watch');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var gulpPath = require('gulp-path');
var inject = require('gulp-inject');


var config = {
  port: 5000,
  baseUrl: 'http://localhost',
  paths: {
    html: './src/slim/*.slim',
		pug: './src/html/*.pug',
    js: './src/scripts/*.js',
    stylus: './src/css/*.styl',
    dist: './dist',
		svg: './src/images/svg/*.svg'
  }
};

gulp.task('open', ['connect'], function() {
	gulp.src(config.paths.dist + '/html/index.html')
		.pipe(open({ uri:config.baseUrl + ':' + config.port + '/html/index.html'}));
});

gulp.task('slim', function(){
  gulp.src(config.paths.html)
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest(config.paths.dist + '/html'))
	.pipe(connect.reload());
});



gulp.task('stylus', function () {
  return gulp.src(config.paths.stylus)
    .pipe(stylus({
      compress: true
    }))
		.pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9', 'Firefox ESR', 'Opera 12.1'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
	.pipe(connect.reload());
});

gulp.task('js', function(){
  return gulp.src(config.paths.js)
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});


gulp.task('svgstore', function () {
    return gulp
        .src(config.paths.svg)
				// .pipe(svgmin(function (file) {
        //     var prefix = path.basename(file.relative, path.extname(file.relative));
        //     return {
        //         plugins: [{
        //             cleanupIDs: {
        //                 prefix: prefix + '-',
        //                 minify: true
        //             }
        //         }]
        //     }
        // }))
        .pipe(svgstore())
        .pipe(gulp.dest(config.paths.dist + '/images/svg'));
});


gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.baseUrl,
    livereload: true
  })
});



gulp.task('watch', function(){
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.stylus, ['stylus']);
  gulp.watch(config.paths.html, ['slim']);
	gulp.watch('./dist/html/*.html');
})

gulp.task('default', ['open', 'watch']);
