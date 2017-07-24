var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
	// 监听文件变动
gulp.watch(['source/js/**/*.js']);
gulp.watch(['source/css/**/*.css']);
gulp.watch(['source/tpl/**/*.html']);
// 配置web服务器
gulp.src('./source')
  .pipe(
    webserver({
    host: '0.0.0.0',
    port: '8002',
    livereload: true,
    fallback: 'index.html'
    })
  );
});
