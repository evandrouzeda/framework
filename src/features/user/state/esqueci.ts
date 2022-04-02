import FormEsqueci from "../form/esqueci.js";
import FormLogin from "../form/login.js";
import StateLogin from "./login.js";
import FormState from "./_state.js";

export default class StateEsqueci implements FormState {
    texts = {
        pergunta: "Lembrou sua senha?",
        acao: "Entre"
    }
    form: typeof FormLogin = FormEsqueci;
    esqueci(): FormState {
        return new StateLogin()
    }
    acao(): FormState {
        return new StateLogin()
    }

}