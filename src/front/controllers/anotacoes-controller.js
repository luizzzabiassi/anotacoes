class AnotacoesController{
    constructor(){
        this._anotacoes = []
    }
    addAnotacao(...valor){
        this._anotacoes.push(...valor)
    }
}