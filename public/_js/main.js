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
const raiz = {
    text: "Raiz",
    route: "/"
};
const estacionameto = {
    text: "Estacionamento",
    route: "/estacionamento"
};
const dashboard = {
    text: "Dashboard",
    route: "/dashboard"
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
App.pages.push(login);
App.pages.push({
    route: "/dashboard",
    auth: "accessController",
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div").children(...[raiz, estacionameto].map(b => new Z("button").object(z => {
                z.element.innerText = b.text;
                z.element.onclick = () => {
                    App.route.push(b.route);
                };
            })));
        });
    }
});
App.pages.push({
    route: "/estacionamento",
    auth: "",
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("main").children(...[raiz, dashboard].map(b => new Z("button").object(z => {
                z.element.innerText = b.text;
                z.element.onclick = () => {
                    App.route.push(b.route);
                };
            })));
        });
    }
});
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div").children(...[raiz, dashboard].map(b => new Z("button").object(z => {
                z.element.innerText = b.text;
                z.element.onclick = () => {
                    App.route.push(b.route);
                };
            })));
        });
    }
});
App.init();
