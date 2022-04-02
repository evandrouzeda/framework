import FormEsqueci from "../form/esqueci.js";
import FormLogin from "../form/login.js";
import FormSignup from "../form/signup.js";
import StateCreate from "./create.js";
import StateEsqueci from "./esqueci.js";
import FormState from "./_state.js";

export default class StateLogin implements FormState {
    texts = {
        pergunta: "Não possui uma conta?",
        acao: "Crie sua conta"
    }
    form: typeof FormLogin = FormLogin;
    esqueci(): FormState {
        return new StateEsqueci()
    }
    acao(): FormState {
        return new StateCreate()
    }

}