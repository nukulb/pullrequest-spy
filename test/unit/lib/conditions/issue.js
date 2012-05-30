var pulls = require("./../../../../lib/pulls"),
    issue = require("./../../../../lib/conditions/issue");

describe("Issue", function () {

    beforeEach(function () {
        
    });
    
    it("evaluate fail", function () {
        var evaluations = {},
            x;
        
        spyOn(pulls, "getIssueComments").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            [{ body  : "dude"},{body : "comment 2"}]);
        });
        
        runs(function () {
            issue.evaluate("x",  [{
                    number:"50",
                    base: {
                        ref: "x",
                        sha: "1B", 
                        repo: {
                            name: "repo"
                        }
                    },
                    body: "Something something"
            }], evaluations);
        });
        waitsFor(function (){
            return evaluations["50"].length > 0;
        },2000);
        
        runs(function () {
           expect(evaluations[50][0]).toEqual(issue.error); 
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   it("evaluate success1", function () {
        var evaluations = {},
            x;
        
        spyOn(pulls, "getIssueComments").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            [{ body  : "Fixes /repo#34"},{body : "testing complete"}]);
        });
        
        runs(function () {
            issue.evaluate("x",  [{
                    number:"50",
                    base: {
                        ref: "x",
                        sha: "1B", 
                        repo: {
                            name: "repo"
                        }
                    },
                    body: "Something something"
            }], evaluations);
        });
        waits(250);
        
        runs(function () {
           expect(evaluations[50].length).toEqual(0); 
       });
                 
    });
   it("evaluate success2", function () {
        var evaluations = {},
            x;
        
        spyOn(pulls, "getIssueComments").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            [{ body  : "Something"},{body : "testing complete"}]);
        });
        
        runs(function () {
            issue.evaluate("x",  [{
                    number:"50",
                    base: {
                        ref: "x",
                        sha: "1B", 
                        repo: {
                            name: "repo"
                        }
                    },
                    body: "Something something. Fixes /repo#23"
            }], evaluations);
        });
        waits(250);
        
        runs(function () {
           expect(evaluations[50].length).toEqual(0); 
       });
                 
    });
});
