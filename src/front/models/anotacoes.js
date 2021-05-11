class Anotacoes{
    constructor(titulo, notas){
        if(typeof titulo == 'string'){
            this.titulo = titulo
            this.notas = notas
        }
        else{
            throw new Error('Criação de notas - Dados inválidos.');
        }
    }
}

let anotacao = new Anotacoes()