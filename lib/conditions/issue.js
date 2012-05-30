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
            console.log(pull.body.toLowerCase().match("\/(.*)+#[0-9]+"));
            if(!!pull.body.toLowerCase().indexOf("\/(.*)+#[0-9]+")) {
                return;
            }
            pulls.getIssueComments(repo.user, repo.name, pull.number , function (err, data){
                var issueStated;
                console.log("data");
                for(var comment in data) {
                    data[comment].body = data[comment].body || "";
                    console.log(data[comment].body.toLowerCase().match("\/(.*)+#[0-9]+"));
                    if(!!data[comment].body.toLowerCase().match("\/(.*)+#[0-9]+")) {
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

