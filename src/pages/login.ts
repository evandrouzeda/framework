import App from "../app.js";
import ComponentForm from "../components/form/_component.js";
import RepositoryLocalStorage from "../core/repository/localStorage.js";
import User from "../features/user/domain/entity/user.js";
import FormLogin from "../features/user/form/login.js";
import { $ } from "../ui/zeyo.js";
import Page from "./page.js";

export default class Login implements Page {
    route: string = "/";
    title?: string;
    children?: Node[];
    auth?: string;
    params?: { [key: string]: string; };
    constructor() {
        const main = new $("main").addClass("d-grid", "login").children(
            new $("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100"),
            new $("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
                .children(
                    new $("form").object(e => e.element.onsubmit = (e)=>{
                        e.preventDefault()
                        console.log(e.target)
                    }).addClass("d-grid", "gap-m").children(
                        new $("h1").object(e => e.element.innerText = "Login"),
                        new $("div").addClass("d-grid", "gap-p").children(
                            new $("label").object(e => e.element.innerText = "Usuario"),
                            new $("input"),
                        ),
                        new $("div").addClass("d-grid", "gap-p").children(
                            new $("label").object(e => e.element.innerText = "Senha"),
                            new $("input").atrib("type", "password"),
                        ),
                        new $("button").object(e => e.element.innerText = "Entrar")
                    )
                )
        ).element
        
        /* const login = document.createElement("div")
        login.classList.add()
        const repository = new RepositoryLocalStorage()
        new ComponentForm(login).create(new FormLogin(repository, new User()))
        main.appendChild(login) */
        this.children=[main]
        console.log(this);
        
    }
}