const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('Resources/Sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('Public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('watch', ['sass'], function(){
    gulp.watch('Resources/Sass/**/*.scss', ['sass']);
    // Other watchers
});