var description = "check if rebase needed",
    error = "This branch needs to be rebased",
    pulls = require("./../pulls"),
    utils = require("./../utils");

module.exports = {
    error : error,
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getRef(repo.user, repo.name, pull.base.ref , function (err, data){
               evaluations[pull.number] =  evaluations[pull.number] || []; 
               if (pull.base.sha !== data.object.sha) {
                   evaluations[pull.number].push(error);
               } 
            });
        });
    }
}

