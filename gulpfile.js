var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss    = require('gulp-clean-css'),
    htmlmin  = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'); 



// html

gulp.task('html', () =>{
   console.log('starting minify html file');
    return gulp.src('*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});


// style

gulp.task('styles', function(){
   console.log('start style'); 
    return gulp.src('css/**/*.css')
            .pipe(autoprefixer({
                    browsers: ['last 2 version'],
                    cascade: false
                }))
            .pipe(cleanCss())
            .pipe(gulp.dest('dist/css'));
});


//images
gulp.task('image', () =>{
    console.log('starting image task');
    return gulp.src('img/**/*')
        .pipe(imagemin(
            [   
                imagemin.jpegtran(),
                imageminJpegRecompress()
                   
            ]
            ))
        .pipe(gulp.dest('dist/img'));
});


// javascript

gulp.task('script', function(){
    console.log("starting script task");
    return gulp.src('js/**/*.js')
    .pipe(uglify())
//    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
    
});

// Default task
gulp.task('default', function(){
   console.log("starting default task"); 
});