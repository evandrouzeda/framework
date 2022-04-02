var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "./app.js";
import Login from "./pages/login.js";
import { Z } from "./ui/zeyo.js";
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
App.pages.push(login);
App.pages.push({
    route: "/dashboard",
    auth: "accessController",
    children: [raiz, estacionameto],
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div");
        });
    }
});
App.pages.push({
    route: "/estacionamento",
    auth: "",
    children: [raiz, dashboard],
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div");
        });
    }
});
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    children: [raiz, dashboard],
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div");
        });
    }
});
App.init();
