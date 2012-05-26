var description = "No one file should be modified by multiple Pull Requests" 
module.exports = {
    evaluate : function (repo, res, callback) {
        console.log(description);
        return [];
    }
}
