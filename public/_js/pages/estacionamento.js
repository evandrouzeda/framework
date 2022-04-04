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
import { Z } from "../ui/zeyo.js";
export default class Estacionamento {
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
                return [new Proxy(obj, {
                        set: (target, key, value) => {
                            console.log(key, value);
                            target[key] = value;
                            newComponent.create(target);
                            return true;
                        }
                    }), newComponent];
            }
            const obj = {
                text: "Dashboard",
                route: "/dashboard"
            };
            const [dashboard, button] = teste(obj, new Button());
            return this.main = new Z("div").children(new Button().create(raiz), yield button.create(dashboard), new Z("button").object(z => {
                z.element.innerText = "Troca";
                z.element.onclick = () => {
                    dashboard.text = "Trocado";
                };
            }));
        });
    }
}
