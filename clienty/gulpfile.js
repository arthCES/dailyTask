var gulp = require('gulp');
var webserver = require('gulp-webserver');
var server = {
        host: 'localhost',
        port: '8001'
    };
gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            host:             server.host,
            port:             server.port,
            livereload:       true,
            directoryListing: false
        }));
});
