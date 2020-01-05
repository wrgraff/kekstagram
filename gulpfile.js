var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function () {
	browserSync.init({
        server: "."
    });

	gulp.watch('js/*.js').on('change', browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
	'serve'
));
