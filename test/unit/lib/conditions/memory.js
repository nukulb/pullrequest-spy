var memory = require("./../../../../lib/conditions/memory"),
    pulls = require("./../../../../lib/pulls"),
    github = pulls.github,
    utils = require("./../../../../lib/utils");

describe("pulls", function () {

    beforeEach(function () { 
         spyOn(pulls, "getFiles").andCallFake(
                function (x, y , z, callback){
                    callback(undefined,
                    [
                        'views/tester.js',
                        'views/tester.cpp',
                        'vie.ws/test.cc',
                        'views/tester.h',
                        's/s/s/dd.cpp/tester.js'
                    ]);
        });
    });

    it("evaluate", function () {
       var evaluations = {};
       runs(function () {
           memory.evaluate("x", [{number:"50"}], evaluations);
       });
       waitsFor(function () {
            return evaluations["50"].length > 0;
       }, 2000);
       runs(function () {
           expect(evaluations[50][0]).toEqual("Memory leak risk detected"); 
           expect(evaluations[50].length).toEqual(1); 
       });

    });
   
   
});
