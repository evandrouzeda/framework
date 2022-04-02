import FormLogin from "../form/login.js";
import StateLogin from "./login.js";
export default class StateCreate {
    esqueci() {
        return [new StateLogin(), FormLogin];
    }
    acao() {
        return [new StateLogin(), FormLogin];
    }
}
