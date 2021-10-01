const API_KEY = "https://api.github.com/users/idautterstrom/repos"; //Endpoint to get all my repos
const API_USER = "https://api.github.com/users/idautterstrom"; //Endpoint to my username and profile picture

const projects = document.getElementById("projects");
const user = document.getElementById("user")

//To get the commits from a PR, you need to get the URL from the commits_url property in the PR json object. 
//It might look something like this:
//https://api.github.com/repos/Technigo/project-news-site/pulls/227/commits
//and then do a fetch with that url.


fetch(API_USER) 
.then((res) => res.json())
.then((git_user) => {
    console.log(git_user) //Min user
    user.innerHTML = 
    `<a href="https://github.com/Idautterstrom" class="user-name">${git_user.login}</a>
    </br> <img src="https://avatars.githubusercontent.com/u/80784577?v=4" class="profile_picture" alt="profilepicture">`
}) 

fetch(API_KEY) 
   .then((res) => res.json())
   .then((git_list) => {
       console.log(git_list) //Mitt repo
       git_list.forEach(repo => { //Börjat loopa igenom arrayen
           console.log(repo.fork)
           if (repo.fork === true) { //om ett specifikt värde
               projects.innerHTML += 
               `<div class="items"> 
               <p>Name of repo: ${repo.name}</p> 
               <p>Git url: ${repo.git_url}</p> 
               <p>Branch: ${repo.default_branch}</p> 
               <p>Last pushed: ${new Date(repo.pushed_at).toDateString()}</p> 
               <p>Number of commits: ${repo.commits_url}</p> //how do I fetch the URL from this?
               </div>`
           }
       });
   })



 



  