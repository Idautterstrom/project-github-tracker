const API_KEY = "https://api.github.com/users/idautterstrom/repos"; //Endpoint to get all my repos
const API_USER = "https://api.github.com/users/idautterstrom"; //Endpoint to my username and profile picture


const projects = document.getElementById("projects");
const user = document.getElementById("user")

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
       console.log(git_list) 
       git_list.forEach(repo => { 
           console.log(repo.fork)
           if (repo.fork) { 
           let commits = numberOfCommits(repo)   
              projects.innerHTML += 
               `<div class="items"> 
               <p>Name of repo: ${repo.name}</p> 
               <p>${repo.git_url}</p> 
               <p>Branch: ${repo.default_branch}</p> 
               <p>Last pushed: ${new Date(repo.pushed_at).toDateString()}</p> 
               <p>Number of commits: ${commits}</p>
               </div>`
          }
       });
   })

const numberOfCommits = (repo) => {
    const base_url = "https://api.github.com/";
    const owner = "idautterstrom";
    console.log(repo.name);
    let compare_url = base_url + "repos/" + owner + "/" + repo.name + "/commits";
    fetch(compare_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        return data.length;
      });
  };


   
