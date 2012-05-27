module.exports = {
    Framework : {
        user : "blackberry-webworks",
        name : "BB10-WebWorks-Framework",
        conditions : [
            "sameFile", "memory", "build", "rebase" 
        ]
    },
    Packager : {
        user : "blackberry-webworks",
        name : "BB10-Webworks-Packager",
        conditions : [
            "sameFile", "memory" , "build", "rebase"
        ]
    }
}
