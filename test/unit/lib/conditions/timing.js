var pulls = require("./../../../../lib/pulls"),
    timing = require("./../../../../lib/conditions/timing");

describe("rebase", function () {

    beforeEach(function () {
        spyOn(pulls, "getCommit").andCallFake(function (x, y, z, callback) {
            callback(undefined,
            { author : { date: "2010-04-10T14:10:01-07:00" }});
        });
    });
    
    it("evaluate", function () {
        var evaluations = {},
            x;
        runs(function () {
            timing.evaluate("x",  [{
                    number:"50",
                    head: {
                        ref: "x",
                        sha: "1B" 
                    }
            }], evaluations);
        });
        waitsFor(function (){
            return evaluations["50"].length > 0;
        },2000);
        
        runs(function () {
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   
});
