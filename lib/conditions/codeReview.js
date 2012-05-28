var description = "check if code review is done",
    error = "code review complete is pending",
    pulls = require("./../pulls"),
    utils = require("./../utils");

module.exports = {
    error : error,
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getIssueComments(repo.user, repo.name, pull.number , function (err, data){
               evaluations[pull.number] =  evaluations[pull.number] || []; 
               var codeReview;
               for(var comment in data) {
                   data[comment].body = data[comment].body || "";
                   if(data[comment].body.toLowerCase().indexOf("code review complete") >= 0 ||
                      data[comment].body.toLowerCase().indexOf("r+") >= 0) {
                       codeReview = true;
                   }
               }
               if (!codeReview){
                   evaluations[pull.number].push(error);
                   return;
               }
            });
        });
    }
}

