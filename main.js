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
        if (!response.ok) {
            throw new Error ('Não foi possível carregar os dados, atualize a página ou tente novamente mais tarde!')
        }
        return response.json();
    })
    .then(function(json){
        
        profileAvatar.src = json.avatar_url
        profileName.innerHTML = json.name;
        profileUser.innerHTML = json.login;
        profileRepos.innerHTML = json.public_repos;
        profileFollowers.innerHTML = json.followers;
        profileFollowing.innerHTML = json.following;
        profileLink.href = json.html_url;
        
    })
    .catch(function (error){
        alert(error.message);
        console.error(error);
    })
})