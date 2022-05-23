const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

// js-build
gulp.task("js-build", function (done) {
  gulp
    .src(["./src/js/util/dom.js", "./src/js/**/*.js"])
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"));
  done();
});

gulp.task("browser-sync", (done) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    open: false,
  });
  done();
});
gulp.task("watch", (done) => {
  gulp.watch(
    ["./src/js/util/dom.js", "./src/js/**/*.js"],
    gulp.series("js-build", "browser-reload")
  );
  done();
});
gulp.task("browser-reload", (done) => {
  browserSync.reload();
  done();
});
gulp.task(
  "default",
  gulp.series("browser-sync", "watch", (done) => {
    done();
  })
);
