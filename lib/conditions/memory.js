var description = "Test memory consumption",
    fileExtensions = ['cpp','h','cc', 'css'],
    pulls = require("./../pulls");

module.exports = {
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getFiles(repo.user, repo.name, pull.number, function (err, files){
                //console.log(files);
               var split,
                   fileExtension;
               evaluations[pull.number] = []; 
               files.forEach(function (file) {
                    split = file.split("\.");
                    fileExtension = split[split.length - 1];
                    if (fileExtensions.contains(fileExtension)){
                        evaluations[pull.number].push("Memory leak risk detected");
                    }
                });
            });
        });
    }
}

