import Form from "../../../core/entity/form.js";
import FormLogin from "../form/login.js";
import FormSignup from "../form/signup.js";
import StateLogin from "./login.js";
import FormState from "./_state.js";

export default class StateEsqueci implements FormState {
    esqueci(): [FormState, typeof FormLogin] {
        return [new StateLogin(), FormLogin]
    }
    acao(): [FormState, typeof FormLogin] {
        return [new StateLogin(), FormLogin]
    }

}