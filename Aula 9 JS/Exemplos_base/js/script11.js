let url = "https://randomuser.me/api/?format=json&results=10";

fetch(url)
    .then( (resp) => resp.json())
    .then( function(dados){
        console.log(dados)
        let usuarios = dados.results;
        usuarios.forEach(function(user, i ){
            document.querySelector("#lista")
                    .innerHTML += `<img  src="${user.picture.large}"> <br>
                    ${user.name.first}<br>`
        })
    })

