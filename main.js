document.addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const photo = document.getElementById('photo');
    const repositorio = document.getElementById('repos');
    const seguidores = document.getElementById('followers');
    const seguindo = document.getElementById('following');
    const linkProfile = document.getElementById('link');

    fetch('https://api.github.com/users/julio-cesar-gomes').then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        username.innerText = json.login;
        photo.src = json.avatar_url;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText =  json.following;
        linkProfile.href = json.html_url;

    })
})