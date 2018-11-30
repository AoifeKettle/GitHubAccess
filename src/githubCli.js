const GitHubClient = require('../libs/GitHubClient.js').GitHubClient;
const octocat = require('../libs/features/octocat');
const users = require('../libs/features/users');
const repositories = require('../libs/features/repositories');

require('dotenv').config();

var token = process.env.TOKEN || '<token>';

if (!token || token === '<token>') {
  console.log('error')
}
else{
  let githubCliDotCom = new GitHubClient({
  baseUri:"https://api.github.com",
  token: token
}, repositories, owner);

//owner of the repository
// var handle = "MartaL0b0";
// githubCliDotCom.getData({path:`/users/${handle}`})
//   .then(response => {
//     console.log(response.data);
//   });
var count = 0;
var owner = "MartaL0b0";


var repository = "EBII1819--Chatbot_Room_Booking"
//var sha = "83c8ace6de3cf39facc6d1b422ea774874b1d3df"
githubCliDotCom.getData({path:`/repos/${owner}/${repository}/commits`})
.then(response => {

  fs.writeFile("./object.json", (response.data), (err) => {
      if (err) {
          console.error(err);
          return;
      };
      if (response.data != '') { // Check that the body isn't empty
                    //console.log(response.data); // Print the body to check if it's actually a valid JSON
                    for(var i = 0; i < (response.data).length; i++){
                   var date = (response.data)[i].commit.author.date;
                   var author = (response.data)[i].commit.author.name;
                   count ++;

                }
                } else {
                    console.log('Body is empty');
                }
                //console.log(times);
                //console.log(authors);
      // var newData=JSON.parse(response.data).name;
      // console.log(newData);
    //  console.log(response.data);
      console.log("File has been created");

  });

  });

  var sinTimes = 0;


var fs = require("fs");
var fileContent = "hello";


}


      //res.statusCode = 200;
//       Content-Type: text/html; charset=utf-8
// Content-Type: multipart/form-data; boundary=something



//
// fetchUserRepositories({handle})
//   .then(response => {
//     console.log(response.data);
//   });
//
// function fetchUserRepositories({handle}) {
//  githubCliDotCom.getData({path:`/users/${handle}/repos`})
//     .then(response => {
//       return response.data;
//     });
// }

// githubCli.octocat()
//   .then(data => {
//     // display the Zen of Octocat
//     console.log(data);
//   })
//
// githubCli.fetchUser({handle:'AoifeKettle'})
//   .then(user => {
//     // all about @k33g
//     console.log(user);
//   })
