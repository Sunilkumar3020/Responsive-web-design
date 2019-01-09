var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss    = require('gulp-clean-css'),
    htmlmin  = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    watch = require('gulp-watch');



// html

gulp.task('html', function(){
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
gulp.task('image', function(){
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
//   console.log("starting default task"); 
});


// Watch task

gulp.task('watch', function(){
    console.log('starting watch task');
    gulp.watch('*.html', gulp.series('html'));
    gulp.watch('css/**/*.css', gulp.series('styles'));
    gulp.watch('js/**/*.js', gulp.series('script'));
    gulp.watch('img/**/*', gulp.series('image'));
});















