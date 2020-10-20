const gulp = require("gulp");
const postcss = require("gulp-postcss");
const precss = require("precss");
const cssnano = require("cssnano");

gulp.task("css", () => {
  return gulp
    .src("src/**/*.css")
    .pipe(postcss([precss, cssnano]))
    .pipe(gulp.dest("build/"));
});
