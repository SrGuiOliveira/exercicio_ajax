document.addEventListener('DOMContentLoaded', function(){
    const endpoint = 'https://api.github.com/users/srguioliveira';

    const profileAvatar = document.querySelector('#profileAvatar');
    const profileName = document.querySelector('#profileName');
    const profileUser = document.querySelector('#profileUser');
    const profileRepos = document.querySelector('#profileRepos');
    const profileFollowers = document.querySelector('#profileFollowers');
    const profileFollowing = document.querySelector('#profileFollowing');
    const profileLink = document.querySelector('#profileLink');


    fetch(endpoint).then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
    })
})