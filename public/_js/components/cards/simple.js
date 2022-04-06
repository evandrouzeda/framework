import { Z } from "../../ui/zeyo.js";
export default class CardSimple {
    constructor() {
        this.main = new Z("div");
    }
    create(o) {
        //Todo: aqui teria que chamar um adapter do tipo presentar para adaptar o objeto para o componente
        return this.main = new Z("div").children(new Z("h3").text(o.nome)).click(() => {
            if (o.nome === "teste")
                o.nome = "clicou";
            else
                o.nome = "teste";
        });
    }
    ;
}
