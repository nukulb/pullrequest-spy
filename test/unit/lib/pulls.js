var pulls = require("./../../../lib/pulls"),
    github = pulls.github;
    
describe("pulls", function () {

    beforeEach(function () {
        spyOn(github.pullRequests, "getAll").andCallFake(function (msg, callback){
            callback();
        });
         spyOn(github.pullRequests, "getFiles").andCallFake(function (msg, callback){
            callback();
        });
    });

    it("getAll", function () {
        pulls.getAll("x","y", function () {});
        expect(github.pullRequests.getAll).toHaveBeenCalled();
    });
    
    it("getFiles", function () {
        pulls.getFiles("x","y", 1, function () {});
        expect(github.pullRequests.getFiles).toHaveBeenCalled();
    });
   
   
});
