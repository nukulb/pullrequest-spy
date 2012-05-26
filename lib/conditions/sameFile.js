var description = "No one file should be modified by multiple Pull Requests" 
module.exports = {
    evaluate : function (repo, res, evaluations) {
        console.log(description);
        res.forEach(function (pull) { 
               evaluations[pull.number] =  evaluations[pull.number] || []; 
//               evaluations[pull.number].push("Dummy problem");
        });
    }
}
