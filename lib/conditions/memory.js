var description = "Test memory consumption",
    fileExtensions = ['cpp','h','cc'],
    pulls = require("./../pulls"),
    utils = require("./../utils");

module.exports = {
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getFiles(repo.user, repo.name, pull.number, function (err, files){
               var split,
                   fileExtension,
                   i,
                   file;
               evaluations[pull.number] =  evaluations[pull.number] || []; 
               for (i = 0; i < files.length; i++) {
                   file = files[i]
                   split = file.split("\.");
                   fileExtension = split[split.length - 1];
                   if (utils.contains(fileExtensions, fileExtension)){
                       evaluations[pull.number].push("Memory leak risk detected");
                       return;
                   }
               };
            });
        });
    }
}

