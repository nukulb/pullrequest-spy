var description = "check if pull request is old",
    error = "Pull request has been open for ",
    pulls = require("./../pulls"),
    utils = require("./../utils");

module.exports = {
    error : error,
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getCommit(repo.user, repo.name, pull.head.sha , function (err, data){
               evaluations[pull.number] =  evaluations[pull.number] || []; 
               var date_now = (new Date()).getTime(),
                   date_updated = (new Date(data.author.date)).getTime(),
                   time_diff = (new Date(date_now - date_updated)).getTime()/ (1000 * 60 * 60 * 24);
               if (time_diff > 3) {
                   evaluations[pull.number].push(error + parseInt(time_diff) + " days");
               } 
            });
        });
    }
}

