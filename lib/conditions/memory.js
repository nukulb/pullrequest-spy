var description = "Test memory consumption",
    fileExtension = ['cpp','h','cc'],
    pulls = require("./../pulls");

module.exports = {
    evaluate : function (repo, res, callback) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getFiles(repo.user, repo.name, pull.number, function (err, files){
                var evaluations = "";
                
                console.log(files);
                files.forEach(function (file) {
                    
                });
                callback(evaluations);                
            });
        });
    }
}

