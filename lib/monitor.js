var repos = [],
    conditions = {},
    pulls = require('./pulls'),
    repos = require('./repos');

var self = {
    start: function () {
        var conditions = [],
            evaluations = {};
        
        //for each repo get the current open pull requests.
        for (var repo in repos) {
            pulls.getAll(repos[repo].user, repos[repo].name, function (err, res) {
                if (!err) {
                    //evaluate conditions
                    evaluations[repos[repo]] = [];
                    repos[repo].conditions.forEach(function (condition) {
                            require("./conditions/"+condition).evaluate(repos[repo],res, function (evaluations){
                                evaluations[repos[repo]].push(evaluations);
                            });
                    });
                    console.log(evaluations);                                        
                }
            });
        }
        //for each open pull request get repos
    },
    stop: function () {
    
    }
};

module.exports = self;
