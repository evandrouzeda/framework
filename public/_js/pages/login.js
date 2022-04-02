var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "../app.js";
import User from "../features/user/domain/entity/user.js";
import StateLogin from "../features/user/state/login.js";
import FormStore from "../features/user/state/_store.js";
import { Z } from "../ui/zeyo.js";
export default class Login {
    constructor() {
        this.route = "/";
        this.main = new Z("main");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            FormStore.model = new User();
            const state = new StateLogin();
            return new Z("main").addClass("d-grid", "login").children(new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100").children(new Z("h1").object(z => z.element.innerText = "Bem-Vindo de volta!!!")), new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(yield FormStore.form.create(new state.form(App.repository, FormStore.model)), FormStore.opt.create(state.texts)));
        });
    }
}
