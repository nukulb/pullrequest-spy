var pulls = require("./../../../../lib/pulls"),
    codeReview = require("./../../../../lib/conditions/codeReview");

describe("rebase", function () {

    beforeEach(function () {
        spyOn(pulls, "getIssueComments").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            [{ body  : "dude"},{body : "comment 2"}]);
        });
    });
    
    it("evaluate", function () {
        var evaluations = {},
            x;
        runs(function () {
            codeReview.evaluate("x",  [{
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
           expect(evaluations[50][0]).toEqual(codeReview.error); 
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   
});
