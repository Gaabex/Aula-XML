$.getJSON("json/dados.json", function(dados){
    for (let opc of dados.opcoes){
        $("#menu").append(`${opc.id} ${opc.nome}<br>`)
    }
})