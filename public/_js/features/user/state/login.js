import FormLogin from "../form/login.js";
import StateCreate from "./create.js";
import StateEsqueci from "./esqueci.js";
export default class StateLogin {
    constructor() {
        this.texts = {
            pergunta: "Não possui uma conta?",
            acao: "Crie sua conta"
        };
        this.form = FormLogin;
    }
    esqueci() {
        return new StateEsqueci();
    }
    acao() {
        return new StateCreate();
    }
}
