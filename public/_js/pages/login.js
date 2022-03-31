export default class Login {
    constructor() {
        this.route = "/";
        const main = document.createElement("main");
        main.classList.add("d-grid", "login");
        this["route"] = "/";
        const logo = document.createElement("div");
        logo.classList.add("d-grid", "gap-m", "jc-center", "ac-center", "h-100");
        logo.innerText = "Evandro";
        main.appendChild(logo);
        const login = document.createElement("div");
        login.classList.add("d-grid", "gap-m", "jc-center", "ac-center", "h-100", "login");
        main.appendChild(login);
        this.children = [main];
        console.log(this);
    }
}
