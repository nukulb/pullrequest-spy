var hudson = require("./../../../../lib/hudson"),
    build = require("./../../../../lib/conditions/build"),
    XML = require("xmlhttprequest");

describe("build", function () {

    beforeEach(function () {
        spyOn(hudson, "getLatestBuild").andCallFake(function (x, callback){
            callback(JSON.stringify({
                result : 'FAILED'
            }));
        });
    });
    
    it("evaluate", function () {
        var evaluations = {},
            x;
        runs(function () {
            build.evaluate("x",  [{
                    number:"50",
                    head: {
                        label: "x:y" 
                    }
            }], evaluations);
        });
        waitsFor(function (){
            return evaluations["50"].length > 0;
        },2000);
        
        runs(function () {
           expect(evaluations[50][0]).toEqual("CI build has failed"); 
           expect(evaluations[50].length).toEqual(1); 
       });
                 
    });
   
   
});
