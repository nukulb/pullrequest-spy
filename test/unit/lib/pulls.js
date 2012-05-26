var pulls = require("./../../../lib/pulls"),
    github = pulls.github;
    
describe("pulls", function () {

    beforeEach(function () {
        spyOn(github.pullRequests, "getAll").andCallFake(function (msg, callback){
            callback();
        });
    });

    it("getAll", function () {
        pulls.getAll("x","y", function () {});
        expect(github.pullRequests.getAll).toHaveBeenCalled();
    });

   
});
