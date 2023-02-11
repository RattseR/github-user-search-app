{   
  async function createUserCard(event){
    event.preventDefault();
     enum months{
      January,
      February,
      March,
      April,
      May,
      June,
      July,
      August,
      September,
      Octomber,
      November,
      December
    }
    let cardhtml = "";
    let username = (<HTMLInputElement>document.getElementById('search-name')).value;   
    let result = await fetch(`https://api.github.com/users/${username}`);
    if (result.status===200){

        fetch(`https://api.github.com/users/${username}`).then((response)=>{
        response.json().then((user)=>{
            let oldelement = <HTMLElement>document.querySelector('.user_info_outer');
            if(oldelement) {oldelement.remove();}
            let usernickname:string = user.login;
            let avatarurl:string = user.avatar_url;
            let companies:string = 'No Info';
            let datestring:string = user.created_at;
            let date:Date = new Date(datestring);
            let followers:number = user.followers;
            let following:number = user.following;
            let repositories:number = user.public_repos;
            let location:string = 'Not Avialable';
            let blog:string = 'Not Avialable';
            let twitter:string="";
            let bio:string="User Bio Is Not Avialable";
            let datemonth:string=(<string>months[date.getMonth()]);
            let dateday: number = date.getDay();
            let dateyear:number = date.getFullYear();
            if (user.twitter_username){
                twitter=user.twitter_username;
            } else {
                twitter='Not Avialable';
            }
            if(user.bio){
                bio=user.bio;
            } else {
                bio = "User Bio is not avialable";
            }
            if(user.company) {
              companies = user.company;
            } else {
              companies = 'Not Avialable'
            }
            if (user.location) {location = user.location}
            if (user.blog) (blog = user.blog);
            cardhtml = cardhtml+ 
            `
            <div class="desktop_user_image">
              <img class="desktop_img" src="${avatarurl}">
            </div>
            <div class="user_box">
              <div class="mobile_user_image">
                <img class="mobile_img" src="${avatarurl}">
              </div>
              <div class="registration_info">
                <div class="usernames">
                  <h2 class="the_username dark">${usernickname}</h2>
                  <p class="username">${companies}</p>
                </div>
                <p class="registration_date">Joined ${dateday} ${datemonth} ${dateyear}</p>
              </div>
            </div>
            <p class="user_bio">${bio}</p>
            <div class="rep_followers">
              <div class="followers">
                <h5 class="follower_head">Repos</h5>
                <p id='repositories' class="follower_info dark">${repositories}</p>
              </div>
              <div class="followers">
                <h5 class="follower_head">Followers</h5>
                <p id='follower-quantity' class="follower_info dark">${followers}</p>
              </div>
              <div class="followers">
                <h5 class="follower_head">Following</h5>
                <p id='following' class="follower_info dark">${following}</p>
              </div>
            </div>
            <div class="wokrplace_details">
              <div class="area1">
                <div class="section1">
                  <img class="bottom_icons loc-icon" src="./assets/icon-location.svg">
                  <p class="bottom_text">${location}</p>
                </div>
                <div class="section1">
                  <img class="bottom_icons blog-icon" src="./assets/icon-website.svg">
                  <a class="bottom_text links" href="${blog}">${blog}</a>
                </div>
              </div>
              <div class="area2">
                <div class="section1">
                  <img class="bottom_icons twitter-icon" src="./assets/icon-twitter.svg">
                  <p class="bottom_text">${twitter}</p>
                </div>
                <div class="section1">
                  <img class="bottom_icons compani-icon" src="./assets/icon-company.svg">
                  <p class="bottom_text">${companies}</p>
                </div>
              </div>
            </div>
          

            `;


               
            
            
            const user_outer:any = document.createElement('div');
            (<HTMLElement>user_outer).classList.add('user_info_outer');
            const maincontainer:any = document.querySelector('.main_container');
            user_outer.innerHTML=cardhtml;
            maincontainer.appendChild(user_outer);

            
            if ((<HTMLElement>document.getElementById('mode-indicator')).classList.contains('lightmode')){
              changeThemeToLight();
            }
            if ((<HTMLElement>document.getElementById('mode-indicator')).classList.contains('darkmode')){
              changeThemeToDark();
            }

        })
        .catch((error)=>{console.log(error)});
   });
   
 } else {
    const searchbox = document.getElementById('search-name');
    (<HTMLInputElement>searchbox).value = 'No Result';
    (<HTMLInputElement>searchbox).classList.add('errormessage');
 }
 }
 


(<HTMLElement>document.getElementById('search')).addEventListener('click',createUserCard);

(<HTMLElement>document.getElementById('search-name')).addEventListener('focus',(e)=>{
  if ((<HTMLInputElement>e.target).classList.contains('errormessage')) {
    (<HTMLInputElement>e.target).value = '';
    (<HTMLInputElement>e.target).classList.remove('errormessage');
  }
})

function changeThemeToDark (){
  //if((<HTMLImageElement>document.getElementById('mode-indicator')).classList.contains('lightmode')){
    (<HTMLImageElement>document.getElementById('mode-indicator')).src= "./assets/icon-sun.svg";
    
    (<HTMLParagraphElement>document.querySelector('.mode_name')).innerHTML = 'LIGHT';
    (<HTMLElement>document.querySelector('body')).style.backgroundColor = '#141D2F';
    (<HTMLElement>document.querySelector('body')).style.color = '#FFFFFF';
    (<HTMLElement>document.querySelector('.main_container')).style.backgroundColor = '#141D2F';
    (<HTMLElement>document.querySelector('.search_area')).style.backgroundColor = '#1E2A47';
    (<HTMLElement>document.querySelector('.search_name')).style.backgroundColor = '#1E2A47';
    (<HTMLElement>document.querySelector('.user_info_outer')).style.backgroundColor = '#1E2A47';
    (<HTMLElement>document.querySelector('.rep_followers')).style.backgroundColor = '#141D2F';
    (<HTMLElement>document.querySelector('.search_name')).style.color = '#FFFFFF';
    (<HTMLElement>document.querySelector('.search_name')).style.caretColor = '#0079FF';
    (<HTMLElement>document.querySelector('.links')).style.color = '#FFFFFF';
    (<HTMLElement>document.querySelector('.mode_name')).classList.add('darkmode');
    (<HTMLElement>document.querySelector('.mode_name')).classList.remove('lightmode');
    (<HTMLElement>document.querySelector('#mode-indicator')).classList.add('darkmode');
    (<HTMLElement>document.querySelector('#mode-indicator')).classList.remove('lightmode');
    let array = document.querySelectorAll('.dark');
    for (let element of array) {
      element.classList.remove('dark');
      element.classList.add('light');
    }

    let lightarr = document.querySelectorAll('.darkmode');
    for(let elem of lightarr) {
        elem.removeEventListener('click',changeThemeToDark)
        elem.addEventListener('click',changeThemeToLight);
    }
  //}
}

function changeThemeToLight(){
  //if((<HTMLImageElement>document.getElementById('mode-indicator')).classList.contains('darkmode')){
    (<HTMLImageElement>document.getElementById('mode-indicator')).src= "./assets/icon-moon.svg";
    
    (<HTMLParagraphElement>document.querySelector('.mode_name')).innerHTML = 'DARK';
    (<HTMLElement>document.querySelector('body')).style.backgroundColor = '#F2F2F2';
    (<HTMLElement>document.querySelector('body')).style.color = '#4B6A9B';
    (<HTMLElement>document.querySelector('.main_container')).style.backgroundColor = '#F6F8FF';
    (<HTMLElement>document.querySelector('.search_area')).style.backgroundColor = '#FEFEFE';
    (<HTMLElement>document.querySelector('.search_name')).style.backgroundColor = '#FEFEFE';
    (<HTMLElement>document.querySelector('.user_info_outer')).style.backgroundColor = '#FEFEFE';
    (<HTMLElement>document.querySelector('.rep_followers')).style.backgroundColor = '#F6F8FF';
    (<HTMLElement>document.querySelector('.search_name')).style.color = '#222731';
    (<HTMLElement>document.querySelector('.search_name')).style.caretColor = '#0079FF';
    (<HTMLElement>document.querySelector('.links')).style.color = '#4B6A9B';
    (<HTMLElement>document.querySelector('.mode_name')).classList.add('lightmode');
    (<HTMLElement>document.querySelector('.mode_name')).classList.remove('darkmode');
    (<HTMLElement>document.querySelector('#mode-indicator')).classList.add('lightmode');
    (<HTMLElement>document.querySelector('#mode-indicator')).classList.remove('darkmode');
    let array = document.querySelectorAll('.light');
    for (let element of array) {
      element.classList.remove('light');
      element.classList.add('dark');
    }

    let lightarr = document.querySelectorAll('.lightmode');
    for(let elem of lightarr) {
        elem.removeEventListener('click',changeThemeToLight)
        elem.addEventListener('click',changeThemeToDark);
        
    }
  //}
}
const modearr = document.querySelectorAll('.lightmode');
for (let el of modearr) {
  el.addEventListener('click',changeThemeToDark);
}

// document.getElementById('mode-indicator')?.addEventListener('click',changeThemeToDark);
}