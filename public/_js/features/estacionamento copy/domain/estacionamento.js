export default class Estacionamento {
    constructor(nome) {
        this.id = "";
        this.nome = "";
        this.vagas = 0;
        this.nome = nome;
    }
    adicionaVaga() {
        this.vagas++;
    }
}
