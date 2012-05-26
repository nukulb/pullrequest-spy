var description = "Hudson CI build is passing", 
    hudson = require("./../hudson");
module.exports = {
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
            evaluations[pull.number] =  evaluations[pull.number] || []; 
            hudson.getLatestBuild(repo.name + "-"+ pull.head.label.split(":")[1], function (data){
                var jsonData = JSON.parse(data);
                console.log(jsonData.result);
                if (jsonData.result !== "SUCCESS") {
                    evaluations[pull.number].push("CI build has failed");
                    return;
                }    
            }); 
//           hudson.getLatestBuild(); 
        });
    }
}
