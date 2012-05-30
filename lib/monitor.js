var repos = [],
    conditions = {},
    pulls = require('./pulls'),
    utils = require('./utils'),
    repos = require('./repos');

var self = {
    start: function () {
        var conditions = [],
        evaluations = {},
        name,
        i = 0;

        //for each repo get the current open pull requests.
        for (var repo in repos) {
            (function (repo, i) {
                pulls.getAll(repos[repo].user, repos[repo].name, function (err, res) {
                    if (!err) {
                        //evaluate conditions
                        name = repos[repo].user + "/" + repos[repo].name + "/";
                        evaluations[name] = {};
                        repos[repo].conditions.forEach(function (condition) {
                            require("./conditions/"+condition).evaluate(repos[repo],res,  evaluations[name]);
                        });
                        //yes this was the last call
                        if (i == utils.size(repos) - 1) {
                            console.log(evaluations);    
                        }
                    }
                });
            })(repo, i);
            i++;
        }
        setTimeout(function () {
            console.log(evaluations);
        }, 5000);
    },
    stop: function () {
    
    }
};

module.exports = self;
