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
        var self = this;
        
        github.pullRequests.getAll(
            {
                user: user,
                repo: repo,
                state: "open",
            },
            function(err, res) {
                // other assertions go here
                callback(err,res);
            }
        );
    },

    getFiles:  function(user, repo, pull, callback) {
        var self = this;
        
        github.pullRequests.getFiles(
            {
                user: user,
                repo: repo,
                number: pull,
            },
            function(err, res) {
                // other assertions go here
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
