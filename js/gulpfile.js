var gulp = require("gulp");
gulp.task("copy-html",function(){
	
	gulp.src("index.html")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\pan"));
});
