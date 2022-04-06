var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Button from "../components/button.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Z } from "../ui/zeyo.js";
export default class PageEstacionamento {
    constructor() {
        this.route = "/estacionamento";
        this.main = new Z("main");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const raiz = {
                text: "Raiz",
                route: "/"
            };
            function teste(obj, component) {
                const newComponent = new Proxy(component, {
                    set: (target, key, value) => {
                        var _a;
                        if (key === "main")
                            (_a = target.main.element.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(value.element, target.main.element);
                        target[key] = value;
                        return true;
                    }
                });
                class Watcher {
                    constructor(parent, key) {
                        this.key = "";
                        this.parent = parent;
                        this.key = key;
                    }
                    get(target, key, receiver) {
                        if (typeof target[key] === 'object' && target[key] !== null) {
                            return new Proxy(target[key], new Watcher(receiver, key));
                        }
                        else {
                            return target[key];
                        }
                    }
                    set(target, key, value, receiver) {
                        target[key] = value;
                        if (this.parent === null)
                            newComponent.create(target);
                        else
                            this.parent[this.key] = target;
                        return true;
                    }
                }
                return [new Proxy(obj, new Watcher(null, "")), newComponent];
            }
            const obj = {
                text: "Dashboard",
                route: "/dashboard"
            };
            const [dashboard, button] = teste(obj, new Button());
            const estacionamentoList = [];
            let list;
            let lista;
            [list, lista] = teste({
                title: "Estacionamentos",
                list: estacionamentoList
            }, new ListaHorizontal());
            console.log(list);
            return this.main = AppLayout.inner(new Z("main").children(new Z("h1").text("Estacionamento"), new Z("button").text("Adicionar").click(() => list.list.push(new Estacionamento("teste"))), yield lista.create(list)));
        });
    }
}
