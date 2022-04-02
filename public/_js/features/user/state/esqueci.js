import FormEsqueci from "../form/esqueci.js";
import StateLogin from "./login.js";
export default class StateEsqueci {
    constructor() {
        this.texts = {
            pergunta: "Lembrou sua senha?",
            acao: "Entre"
        };
        this.form = FormEsqueci;
    }
    esqueci() {
        return new StateLogin();
    }
    acao() {
        return new StateLogin();
    }
}
