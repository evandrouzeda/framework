import App from "./app.js";
import Login from "./pages/login.js";
console.log(window.location.pathname);
const raiz = document.createElement("button");
raiz.innerText = "Raiz";
raiz.onclick = _ => {
    App.route.push("/");
};
const estacionameto = document.createElement("button");
estacionameto.innerText = "Estacionamento";
estacionameto.onclick = _ => {
    App.route.push("/estacionamento");
};
const dashboard = document.createElement("button");
dashboard.innerText = "Dashboard";
dashboard.onclick = _ => {
    App.route.push("/dashboard");
};
const back = document.createElement("button");
back.innerText = "Voltar";
back.onclick = _ => { window.history.back(); };
const login = new Proxy(new Login, {
    set: (target, key, value) => {
        console.log(`${String(key)} set to value ${value}`);
        target[key] = value;
        return true;
    }
});
const teste = document.createElement("button");
teste.innerText = "Dashboard";
teste.onclick = _ => {
    login.params = { "date": new Date().toString() };
    console.log(login);
};
App.root.appendChild(teste);
App.pages.push(login);
App.pages.push({
    route: "/dashboard",
    auth: "accessController",
    children: [raiz, estacionameto]
});
App.pages.push({
    route: "/estacionamento",
    auth: "",
    children: [raiz, dashboard]
});
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    children: [raiz, dashboard]
});
App.init();
