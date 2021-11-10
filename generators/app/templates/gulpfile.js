// Initialize modules
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const { watch } = require("gulp");

// Sass Task
function scssTask() {
  return src("app/scss/**/*scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

// JavaScript Task
function jsTask() {
  return src("app/js/**/*.js", { sourcemaps: true })
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "."
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0"
      }
    }
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["app/scss/**/*.scss", "app/**/*.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);
exports.default = function() {
  // The task won't be run until 500ms have elapsed since the first change
  watch(
    "app/scss/**/*.scss",
    "app/js/**/*.js",
    "*.html",
    { delay: 1000 },
    function(cb) {
      // body omitted
      cb();
    }
  );
};

