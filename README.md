pullrequest-spy
===============

Simply goes through the pull request to validate what is needed to close this pull request

##To Build
Make sure you have node installed
./configure

##To Run
./bin/start

##To add a condition
1. Add your condition file under lib/conditions/<name>.js
2. Expose an evaluate method on the condition
3. Add the repo and condition information to the lib/repo.js


##Current supported conditions
1. Memory test required
2. Check to see if the CI build is failing - hudson CI <server-ur>/api/json (This covers lint and testing)
3. Check if the branch is running behind the base branch
4. Check to see if the Pull request has not been updated in 3 days.
5. Check to see if there is no comment saying "r+" or "code complete"

##Next conditions on the list
1. Test if the files are being changed by another open pull request.
2. Check if at least one test file has changed
3. Check to see if the extension folder has been modified - does it need tests
4. Check to see that files begin with the correct license headers

##Upcoming features
1. Automatically put the comment into the pull request
2. Pass in arguments from the configuration file

