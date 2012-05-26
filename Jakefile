desc("runs jake build");
task('default', [], require('./build/build'));

desc("run all tests in node - jake test [path,path2]");
task('test', [], function () {
    require('./build/test')(null, process.argv.length >= 4 ? process.argv[3] : null);
});

desc("runs jshint + csslint - jake lint [path1] [path2]");
task('lint', [], function () {
    require('./build/lint')(Array.prototype.slice.call(arguments));
}, true);

desc("show various codebase stats");
task('stats', [], require('./build/stats'));
