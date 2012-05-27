var hudson = require("./../../../lib/hudson"),
    XML = require("xmlhttprequest");

describe("hudson", function () {

    beforeEach(function () {
        spyOn(XML, "XMLHttpRequest").andCallFake(function (){
            console.log("I am here");
        });
    });
    
    it("get latest build", function () {
        var x;
        runs(function () {
            hudson.getLatestBuild("BB10-WebWorks-Framework", function (data){
                x = true;
            });
        });
        waitsFor(function (){
            return x;
        },2000);
                  
    });
   
   
});
