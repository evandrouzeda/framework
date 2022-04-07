import App from "../app.js";
import User from "../features/user/domain/entity/user.js";
import StateLogin from "../features/user/state/login.js";
import FormStore from "../features/user/state/_store.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";

export default class Login implements Page {
    route: string = "/";
    title?: string;
    children?: Node[];
    auth?: string;
    params?: { [key: string]: string; };
    main = new Z("main");
    async create() {
        FormStore.model = new User()
        const state = new StateLogin()
        return new Z("main").addClass("d-grid", "login").children(
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100").children(
                new Z("h1").object(z => z.element.innerText = "Bem-Vindo de volta!!!")
            ),
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(
                    //await FormStore.form.create(new state.form(App.repository, FormStore.model)),
                    FormStore.opt.create(state.texts)
                )
        )
    }
}