var GitHubApi = require("github"),
    github = new GitHubApi({
            version: "3.0.0"
    }),
    username = "wwbuild",
    password = "nukul123";

github.authenticate({
    type: "basic",
    username: username,
    password: password
});
module.exports = {
    github: github,
    
    getAll:  function(user, repo, callback) {
        github.pullRequests.getAll(
            {
                user: user,
                repo: repo,
                state: "open",
            },
            function(err, res) {
                callback(err,res);
            }
        );
    },

    getCommit:  function(user, repo, sha, callback) {
        github.gitdata.getCommit(
            {
                user: user,
                repo: repo,
                sha: sha 
            },
            function(err, res) {
                // other assertions go here
                callback(err,res);
            }
        );
    },
    
    getIssuesByMilestone:  function(user, repo, milestone, state, callback) {
        github.issues.repoIssues(
            {
                user: user,
                repo: repo,
                milestone: milestone,
                state: state
            },
            function(err, res) {
                // other assertions go here
                callback(err,res);
            }
        );
    }, 

    getRef:  function(user, repo, ref, callback) {
        github.gitdata.getReference(
            {
                user: user,
                repo: repo,
                ref:'heads/' + ref 
            },
            function(err, res) {
                callback(err,res);
            }
        );
    },
     
    getIssueComments:  function(user, repo, issue, callback) {
        github.issues.getComments(
            {
                user: user,
                repo: repo,
                number: issue
            },
            function(err, res) {
                callback(err, res);
            }
        );
    },

    getFiles:  function(user, repo, pull, callback) {
        github.pullRequests.getFiles(
            {
                user: user,
                repo: repo,
                number: pull,
            },
            function(err, res) {
                var filenames = [];
                if (res) {
                    res.forEach(function (files) {
                        filenames.push(files.filename);    
                    });
                }
                callback(err, filenames);
            }
        );
    }

}
