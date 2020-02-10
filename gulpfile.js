var gulp = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCss = require("gulp-clean-css"),
  htmlmin = require("gulp-htmlmin"),
  //   removeHtmlComments = require("gulp-remove-html-comments"),
  imagemin = require("gulp-imagemin"),
  imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

//Static server
gulp.task("browser-sync", function() {});

// html

gulp.task("html", function() {
  console.log("starting minify html file");
  return gulp
    .src("*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest("dist/"));
});

// style

gulp.task("styles", function() {
  console.log("start style");
  return gulp
    .src("css/**/*.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 version"],
        cascade: false
      })
    )
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/css"));
});

//images
gulp.task("image", function() {
  console.log("starting image task");
  return gulp
    .src("img/**/*")
    .pipe(imagemin([imagemin.jpegtran(), imageminJpegRecompress()]))
    .pipe(gulp.dest("dist/img"));
});

// javascript

gulp.task("script", function() {
  console.log("starting script task");
  return (
    gulp
      .src("js/**/*.js")
      .pipe(uglify())
      //    .pipe(concat('main.js'))
      .pipe(gulp.dest("dist/js"))
  );
});

// Default task
gulp.task("default", function() {
  //   console.log("starting default task");
});

// Watch task

gulp.task("watch", function() {
  console.log("starting watch task");
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp
    .watch([
      "dist/*.html",
      "dist/css/**/*.css",
      "dist/js/**/*js",
      "dist/img/**/*"
    ])
    .on("change", browserSync.reload);

  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("css/**/*.css", gulp.series("styles"));
  //    gulp.watch('dist/css/**/*.css').on('change', browserSync.reload);
  gulp.watch("js/**/*.js", gulp.series("script"));
  gulp.watch("img/**/*", gulp.series("image"));
});
//
//
// gulp.task('cssInject', ['styles'], function(){
//    return gulp.src('dist/css/**/*.css')
//     .pipe(browserSync.stream());
// });
//
//
//
//
//
