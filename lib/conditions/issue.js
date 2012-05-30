var description = "check if issue# is mentioned",
    error = "issue# is missing",
pulls = require("./../pulls"),
utils = require("./../utils");

module.exports = {
    error : error,
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            evaluations[pull.number] =  evaluations[pull.number] || []; 
            if(pull.body.toLowerCase().match("\/(.*)+#[0-9]+")) {
                return;
            }
           
            pulls.getIssueComments(repo.user, repo.name, pull.number , function (err, data){
                var issueStated;
                for(var comment in data) {
                    data[comment].body = data[comment].body || "";
                    if(data[comment].body.toLowerCase().match("\/(.*)+#[0-9]+")) {
                        issueStated = true;
                    }
                }
                if (!issueStated){
                    evaluations[pull.number].push(error);
                    return;
                }
            });
        });
    }
}

