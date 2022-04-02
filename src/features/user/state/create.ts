import FormLogin from "../form/login.js";
import FormSignup from "../form/signup.js";
import StateLogin from "./login.js";
import FormState from "./_state.js";

export default class StateCreate implements FormState {
    texts = {
        pergunta: "Já possui uma conta?",
        acao: "Entre"
    }
    form: typeof FormLogin = FormSignup;
    esqueci(): FormState{
        return new StateLogin()
    }
    acao(): FormState{
        return new StateLogin()
    }

}