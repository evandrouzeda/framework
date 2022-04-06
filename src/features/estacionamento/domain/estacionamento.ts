export default class Estacionamento {
    id = ""
    nome = ""
    vagas = 0
    constructor(nome: string){
        this.nome = nome
    }
    adicionaVaga(){
        this.vagas++
    }
}