import Button from "../components/button.js";
import Component from "../components/_component.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";

export default class Estacionamento implements Page{
    route = "/estacionamento";
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main = new Z("main");
    async create() {
        const raiz = {
            text: "Raiz",
            route: "/"
        }
        function teste<T extends {
            text: string;
            route: string;
        }>(obj: T, component: Component): [T, Component] {
            const newComponent = new Proxy(component, {
                set: (target, key, value) => {
                    if (key === "main")
                        target.main.element.parentElement?.replaceChild(value.element, target.main.element);
                    target[key as keyof typeof target] = value
                    return true
                }
            })
            return [new Proxy(obj, {
                set: (target, key, value) => {
                    console.log(key, value)
                    target[key as keyof typeof target] = value
                    newComponent.create(target)
                    return true
                }
            }), newComponent]
        }
        const obj = {
            text: "Dashboard",
            route: "/dashboard"
        }
        const [dashboard, button] = teste(obj, new Button())

        return this.main = new Z("div").children(
            new Button().create(raiz),
            await button.create(dashboard),
            new Z("button").object(z => {
                z.element.innerText = "Troca"
                z.element.onclick = () => {
                    dashboard.text = "Trocado"
                }
            })
        )
    }
}