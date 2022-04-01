import { $ } from "../ui/zeyo.js";
export default class Login {
    constructor() {
        this.route = "/";
        const main = new $("main").addClass("d-grid", "login").children(new $("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100"), new $("div").addClass("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login")
            .children(new $("form").object(e => e.element.onsubmit = (e) => {
            e.preventDefault();
            console.log(e.target);
        }).addClass("d-grid", "gap-m").children(new $("h1").object(e => e.element.innerText = "Login"), new $("div").addClass("d-grid", "gap-p").children(new $("label").object(e => e.element.innerText = "Usuario"), new $("input")), new $("div").addClass("d-grid", "gap-p").children(new $("label").object(e => e.element.innerText = "Senha"), new $("input").atrib("type", "password")), new $("button").object(e => e.element.innerText = "Entrar")))).element;
        /* const login = document.createElement("div")
        login.classList.add()
        const repository = new RepositoryLocalStorage()
        new ComponentForm(login).create(new FormLogin(repository, new User()))
        main.appendChild(login) */
        this.children = [main];
        console.log(this);
    }
}
