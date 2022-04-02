import Form from "../../../core/entity/form.js";
import FormLogin from "../form/login.js";
import FormSignup from "../form/signup.js";
import StateLogin from "./login.js";
import FormState from "./_state.js";
import FormStore from "./_store.js";

export default class StateCreate implements FormState {
    esqueci(): [FormState, typeof FormLogin] {
        return [new StateLogin(), FormLogin]
    }
    acao(): [FormState, typeof FormLogin] {
        return [new StateLogin(), FormLogin]
    }

}