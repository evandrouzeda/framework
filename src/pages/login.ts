import App from "../app.js";
import ComponentForm from "../components/form/_component.js";
import RepositoryLocalStorage from "../core/repository/localStorage.js";
import User from "../features/user/domain/entity/user.js";
import FormLogin from "../features/user/form/login.js";
import FormSignup from "../features/user/form/signup.js";
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
        const repository = new RepositoryLocalStorage()
        const model= new User()
        const form = new Proxy(ComponentForm, {
            set: (target, key, value) => {
                console.log(`${String(key)} set to value ${value}`)
                if(key === "main") {
                    target.main.element.parentElement?.replaceChild(value.element, target.main.element);
                    target[key as keyof typeof target] = value
                    target.main.object(target.submit.bind(target))
                }else target[key as keyof typeof target] = value
                return true
            }
        })
        return new Z("main").addClass("d-grid", "login").children(
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100").children(
                new Z("h1").object(z => z.element.innerText = "Bem-Vindo de volta!!!")
            ),
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(
                    await form.create(new FormLogin(repository, model)),
                    new Z("p").object(z => z.element.innerText = "Não possui uma conta? ").children(
                        new Z("b").addClass("pointer").object(z => {
                            z.element.innerText = "Crie sua conta"
                            z.element.style.textDecoration = "underline"
                            z.element.onclick = async ()=> await form.create(new FormSignup(repository, model))                       })
                    )
                )
        )
    }
}