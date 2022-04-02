var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RepositoryLocalStorage from "../core/repository/localStorage.js";
import User from "../features/user/domain/entity/user.js";
import FormLogin from "../features/user/form/login.js";
import FormStore from "../features/user/state/_store.js";
import { Z } from "../ui/zeyo.js";
export default class Login {
    constructor() {
        this.route = "/";
        this.main = new Z("main");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new RepositoryLocalStorage();
            FormStore.model = new User();
            return new Z("main").addClass("d-grid", "login").children(new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100").children(new Z("h1").object(z => z.element.innerText = "Bem-Vindo de volta!!!")), new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(yield FormStore.form.create(new FormLogin(repository, FormStore.model)), new Z("p").object(z => z.element.innerText = "Não possui uma conta? ").children(new Z("b").addClass("pointer").object(z => {
                z.element.innerText = "Crie sua conta";
                z.element.style.textDecoration = "underline";
                z.element.onclick = () => __awaiter(this, void 0, void 0, function* () { return FormStore.changeState("acao"); });
            }))));
        });
    }
}
