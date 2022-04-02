import FormEsqueci from "../form/esqueci.js";
import FormSignup from "../form/signup.js";
import StateCreate from "./create.js";
import StateEsqueci from "./esqueci.js";
export default class StateLogin {
    esqueci() {
        return [new StateEsqueci(), FormEsqueci];
    }
    acao() {
        return [new StateCreate(), FormSignup];
    }
}
