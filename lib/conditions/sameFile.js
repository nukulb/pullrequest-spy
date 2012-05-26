var description = "No one file should be modified by multiple Pull Requests" 
module.exports = {
    evaluate : function (repo, res) {
        console.log("Evaluating condition for "+ repo.name);
        console.log(description);
    }
}
