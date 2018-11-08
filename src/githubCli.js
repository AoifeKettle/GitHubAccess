const GitHubClient = require('../libs/GitHubClient.js').GitHubClient;
const octocat = require('../libs/features/octocat');
const users = require('../libs/features/users');
const repositories = require('../libs/features/repositories');




let githubCliDotCom = new GitHubClient({
  baseUri:"https://api.github.com",
  token: "token"
}, repositories);


var handle = "AoifeKettle";
githubCliDotCom.getData({path:`/users/${handle}`})
  .then(response => {
    console.log(response.data);
  });

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
