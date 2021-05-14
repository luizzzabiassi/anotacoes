var div = $('#notes');

class AnotacaoView{
    mostraAnotacao(modelAnotacao){
        div.append(`<h6>${modelAnotacao.titulo}</h6>`);
        div.append(`<h6>${modelAnotacao.notas}</h6>`)
    }
}