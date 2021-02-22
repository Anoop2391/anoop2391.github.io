var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var configJson = require('./gulpfile.json');

gulp.task('clean:ext', function() {
    return gulp.src('app/ext/*', { force: true })
        .pipe(plugins.clean());
});

gulp.task('clean:dist', function() {
    return gulp.src(configJson.configVars.dist, { force: true })
        .pipe(plugins.clean());
});

gulp.task('copy:bower', ['clean:ext'], function() {
    return gulp.src(configJson.bowerFiles, { force: true })
        .pipe(gulp.dest('app/ext/'))
});

gulp.task('build', ['clean:dist'], function() {
    const filter = plugins.filter('app/scripts/**/*.js', { restore: true });
    return gulp.src('app/**/*', { force: true })
        .pipe(filter).pipe(plugins.uglify({
            mangle: {
                except: ['angular']
            }
        }).on('error', function(e) {
            console.log(e);
        }))
        .pipe(filter.restore)
        .pipe(gulp.dest(configJson.configVars.dist));
});

gulp.task('sass', function() {
    return gulp.src('app/assets/scss/**/*.scss')
        .pipe(plugins.sass({ includePaths: ['scss'] }).on('error', plugins.sass.logError))
        .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('sass:watch', function() {
    setTimeout(function() {
        gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    }, 2000);
});

gulp.task('connect:build', function() {
    plugins.connect.server({
        name: 'Camping',
        root: configJson.configVars.dist,
        port: 9000,
        livereload: true
    });
});

gulp.task('connect:dev', function() {
    plugins.connect.server({
        name: 'Camping',
        root: 'app',
        port: 7070,
        livereload: true
    });
});

gulp.task('release', ['build'], function() {
    return gulp.src(configJson.configVars.dist + '/*.html').pipe(plugins.cacheBust({ type: 'timestamp' })).pipe(gulp.dest(configJson.configVars.dist));
});