import { Zeyo } from "../../ui/lib.js";
import { Z } from "../../ui/zeyo.js";
import Component from "../_component.js";

export default class CardSimple implements Component {
    main: Z = new Z("div")
    create(o: any): Zeyo {
        //Todo: aqui teria que chamar um adapter do tipo presentar para adaptar o objeto para o componente
        return this.main = new Z("div").children(
            new Z("h3").text(o.nome)
        ).click(() => {
            if (o.nome === "teste")
                o.nome = "clicou"
            else o.nome = "teste"
        })
    };
}