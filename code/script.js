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
       console.log(git_list) //Mitt repo
       git_list.forEach(repo => { //Börjat loopa igenom arrayen
           console.log(repo.fork)
           if (repo.fork === true) { //om ett specifikt värde
           let commits = numberOfCommits(repo)  //När vi anropar, Skickar med objektet till metoden 
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

   //Remember to pass along your filtered repos as an argument when
   //you are calling this function

const numberOfCommits = (repo) => {
    const base_url = "https://api.github.com/";
    const owner = "idautterstrom";
/*     const sha = "master"; */
    console.log(repo.name);
    let compare_url = base_url + "/repos/" + owner + "/" + repo.name + "/commits";
    fetch(compare_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        return data.length;
      });
  };


   