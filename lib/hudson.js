var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
    getLatestBuild: function (job, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                callback(this.responseText);
            }
        }
        xhr.open("GET", "http://mac-ci:9000/job/"+job+"/lastBuild/api/json", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    }    
}
