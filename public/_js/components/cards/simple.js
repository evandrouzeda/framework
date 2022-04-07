import App from "../../app.js";
import FormUpdateEstacionamento from "../../features/estacionamento/form/update.js";
import { Z } from "../../ui/zeyo.js";
import Bottom from "../modal/bottom.js";
export default class CardSimple {
    constructor() {
        this.main = new Z("div");
    }
    create(o) {
        //Todo: aqui teria que chamar um adapter do tipo presentar para adaptar o objeto para o componente
        return this.main = new Z("div").children(new Z("h3").text(o.nome), new Z("p").text(o.vagas)).click(() => {
            Bottom.show(new FormUpdateEstacionamento(App.repository, o));
        });
    }
    ;
}
