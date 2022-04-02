import FormEsqueci from "../form/esqueci.js";
import FormLogin from "../form/login.js";
import FormSignup from "../form/signup.js";
import StateCreate from "./create.js";
import StateEsqueci from "./esqueci.js";
import FormState from "./_state.js";

export default class StateLogin implements FormState {
    esqueci(): [FormState, typeof FormLogin] {
        return [new StateEsqueci(), FormEsqueci]
    }
    acao(): [FormState, typeof FormLogin] {
        return [new StateCreate(), FormSignup]
    }

}