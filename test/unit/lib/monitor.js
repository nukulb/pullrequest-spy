var monitor = require("./../../../lib/monitor"),
    pulls = require("./../../../lib/pulls"),
    repos = require("./../../../lib/repos"),
    conditions = [];

describe("Monitor", function () {
    
    beforeEach(function () {
        var repo,
            cond,
            condition;
        spyOn(pulls, "getAll").andCallFake(function (user, name, callback){
            callback();
        });

        for (repo in repos) {
            for (condition in repos[repo].conditions) {
                cond = require("./../../../lib/conditions/"+
                               repos[repo].conditions[condition]);
                conditions.push(cond);
                spyOn(cond, "evaluate").andCallFake(function () {}); 
            };
        }
    });

    it("gets all pulls", function () {
        monitor.start();
        expect(pulls.getAll).toHaveBeenCalled();
    });

    it("calls evaluate on conditions", function () {
        monitor.start();
        conditions.forEach(function (condition){
            expect(condition.evaluate).toHaveBeenCalled();
        });
    })

});
