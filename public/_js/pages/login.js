import ComponentForm from "../components/form/_component.js";
import RepositoryLocalStorage from "../core/repository/localStorage.js";
import User from "../features/user/domain/entity/user.js";
import FormLogin from "../features/user/form/login.js";
export default class Login {
    constructor() {
        this.route = "/";
        const main = document.createElement("main");
        main.classList.add("d-grid", "login");
        this["route"] = "/";
        const logo = document.createElement("div");
        logo.classList.add("d-grid", "gap-m", "jc-center", "ac-center", "h-100");
        main.appendChild(logo);
        const login = document.createElement("div");
        login.classList.add("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login");
        const repository = new RepositoryLocalStorage();
        new ComponentForm(login).create(new FormLogin(repository, new User()));
        main.appendChild(login);
        this.children = [main];
        console.log(this);
    }
}
