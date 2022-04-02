import App from "../app.js";
import ComponentForm from "../components/form/_component.js";
import RepositoryLocalStorage from "../core/repository/localStorage.js";
import User from "../features/user/domain/entity/user.js";
import FormLogin from "../features/user/form/login.js";
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
        model.username = "evandrouzeda"
        model.password = "teste1234"
        this.main.addClass("d-grid", "login").children(
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100").children(
                new Z("h1").object(z => z.element.innerText = "Bem-Vindo de volta!!!")
            ),
            new Z("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(
                    await ComponentForm.create(new FormLogin(repository, model)),
                    new Z("p").object(z => z.element.innerText = "Não possui uma conta? ").children(
                        new Z("p").object(z => {
                            z.element.innerText = "Crie sua conta"
                            z.element.style.textDecoration = "underline"
                        })
                    )
                )
        ).element
        console.log(this);
        return this.main
    }
}