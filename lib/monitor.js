var repos = [],
    conditions = {},
    pulls = require('./pulls'),
    repos = require('./repos');

var self = {
    start: function () {
        var conditions = [],
        evaluations = {},
        name;

        //for each repo get the current open pull requests.
        for (var repo in repos) {
            (function (repo) {
                pulls.getAll(repos[repo].user, repos[repo].name, function (err, res) {
                    if (!err) {
                        //evaluate conditions
                        name = repos[repo].user + "/" + repos[repo].name + "/";
                        evaluations[name] = {};
                        console.log(name);    
                        repos[repo].conditions.forEach(function (condition) {
                            require("./conditions/"+condition).evaluate(repos[repo],res,  evaluations[name]);
                        });

                    }
                });
            })(repo);

        }
        setTimeout(function () {
            console.log(evaluations);
        }, 2000);
    },
    stop: function () {
    
    }
};

module.exports = self;
