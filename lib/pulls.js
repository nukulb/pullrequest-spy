var GitHubApi = require("github"),
    github = new GitHubApi({
            version: "3.0.0"
    }),
    username = "nukulb",
    password = "crhfwUzI123,"

module.exports = {
    "github": github,

    "getAll":  function(user, repo, callback) {
        var self = this;
        github.authenticate({
            type: "basic",
            username: username,
            password: password
        });
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
    }
}
