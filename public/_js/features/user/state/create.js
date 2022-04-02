import FormSignup from "../form/signup.js";
import StateLogin from "./login.js";
export default class StateCreate {
    constructor() {
        this.texts = {
            pergunta: "Já possui uma conta?",
            acao: "Entre"
        };
        this.form = FormSignup;
    }
    esqueci() {
        return new StateLogin();
    }
    acao() {
        return new StateLogin();
    }
}
