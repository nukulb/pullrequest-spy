var description = "check if testing is done",
    error = "testing is pending",
    pulls = require("./../pulls"),
    utils = require("./../utils");

module.exports = {
    error : error,
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            pulls.getIssueComments(repo.user, repo.name, pull.number , function (err, data){
               evaluations[pull.number] =  evaluations[pull.number] || []; 
               var testComplete;
               for(var comment in data) {
                   data[comment].body = data[comment].body || "";
                   if(data[comment].body.toLowerCase().indexOf("testing complete") >= 0 ||
                      data[comment].body.toLowerCase().indexOf("nothing to test") >= 0) {
                       testComplete = true;
                   }
               }
               if (!testComplete){
                   evaluations[pull.number].push(error);
                   return;
               }
            });
        });
    }
}

