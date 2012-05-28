var pulls = require("./../../../../lib/pulls"),
    testing = require("./../../../../lib/conditions/testing");

describe("testing", function () {

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
            testing.evaluate("x",  [{
                    number:"50",
                    base: {
                        ref: "x",
                        sha: "1B" 
                    }
            }], evaluations);
        });
        waitsFor(function (){
            return evaluations["50"].length > 0;
        },2000);
        
        runs(function () {
           expect(evaluations[50][0]).toEqual(testing.error); 
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   it("evaluate success", function () {
        var evaluations = {},
            x;
        
        spyOn(pulls, "getIssueComments").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            [{ body  : "dude"},{body : "testing complete"}]);
        });
        
        runs(function () {
            testing.evaluate("x",  [{
                    number:"50",
                    base: {
                        ref: "x",
                        sha: "1B" 
                    }
            }], evaluations);
        });
        waits(250);
        
        runs(function () {
           expect(evaluations[50].length).toEqual(0); 
       });
                 
    });
});
