var pulls = require("./../../../../lib/pulls"),
    rebase = require("./../../../../lib/conditions/rebase");

describe("rebase", function () {

    beforeEach(function () {
        spyOn(pulls, "getRef").andCallFake(function (x, y, z, callback){
            callback(undefined,
            { object : { sha: "1A" }});
        });
    });
    
    it("evaluate", function () {
        var evaluations = {},
            x;
        runs(function () {
            rebase.evaluate("x",  [{
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
           expect(evaluations[50][0]).toEqual(rebase.error); 
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   
});
