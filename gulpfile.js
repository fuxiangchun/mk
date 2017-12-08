var gulp = require("gulp");

gulp.task("copy-index",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"));
});


gulp.task("copytoserver",function(){
	gulp.src("*.html").pipe(gulp.dest("E:\\tss\\WWW\\mkgulp"));
	//gulp.src("*.html").pipe(gulp.dest("E:\\tss\\WWW\\mkgulp"));
});

gulp.task("copytoserver",function(){
	gulp.src("*.css").pipe(gulp.dest("E:\\tss\\WWW\\mkgulp"));
});

gulp.task("watchall",function(){
	gulp.watch("css/**/*",["copytoserver"]);
})
