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
import Button from "./components/button.js";
import RepositoryLocalStorage from "./core/repository/localStorage.js";
import Estacionamento from "./pages/estacionamento.js";
import Login from "./pages/login.js";
import { Z } from "./ui/zeyo.js";
console.log(window.location.pathname);
App.repository = new RepositoryLocalStorage();
const raiz = {
    text: "Raiz",
    route: "/"
};
const estacionameto = {
    text: "Estacionamento",
    route: "/estacionamento"
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
    main: new Z("div"),
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div").children(...[raiz, estacionameto].map(b => new Button().create(b)));
        });
    }
});
App.pages.push(new Estacionamento);
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    main: new Z("div"),
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Z("div").children(...[raiz, estacionameto].map(b => new Button().create(b)));
        });
    }
});
App.init();
const object = {
    name: "evandro"
};
const myproxy = new Proxy(object, {
    set: (target, key, value) => {
        console.log(key, value);
        target[key] = value;
        return true;
    },
});
myproxy.name = "test";
object.name = "test2";
console.log(myproxy.name);
console.log(object.name);
function teste(t1, t2) {
    return [t1, t2].map(e => new Proxy(e, {
        set: (target, key, value) => {
            console.log(key, value);
            target[key] = value;
            return true;
        },
    }));
}
const [t1, t2] = teste({ name: "t1" }, { name: "t2" });
t1.name = "teste1";
t2.name = "teste2";
