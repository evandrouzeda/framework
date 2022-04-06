import Button from "../components/button.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Component from "../components/_component.js";
import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";

export default class PageEstacionamento implements Page {
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
        interface TEste {
            "button": {
                text: string;
                route: string;
            }
            "list": Estacionamento[]
        }
        function teste<T extends keyof TEste>(obj: any, component: Component): [any, Component] {
            const newComponent = new Proxy(component, {
                set: (target, key, value) => {
                    if (key === "main")
                        target.main.element.parentElement?.replaceChild(value.element, target.main.element);
                    target[key as keyof typeof target] = value
                    return true
                }
            })
            class Watcher implements ProxyHandler<any> {
                key = ""
                parent: any
                constructor(parent: any, key: string){
                    this.parent = parent
                    this.key = key
                }
                get(target: any, key: string, receiver: any):any {
                    if (typeof target[key] === 'object' && target[key] !== null) {
                        return new Proxy(target[key], new Watcher(receiver, key))
                    } else {
                        return target[key];
                    }
                }
                set(target: any, key: string, value: any, receiver: any) {
                    target[key as keyof typeof target] = value
                    if(this.parent === null)
                    newComponent.create(target)
                    else this.parent[this.key] = target
                    return true
                }
                
            }
            return [new Proxy(obj, new Watcher(null, "")), newComponent]
        }
        const obj = {
            text: "Dashboard",
            route: "/dashboard"
        }
        const [dashboard, button] = teste(obj, new Button())
        const estacionamentoList: Estacionamento[] = []

        let list: {title: string; list: Estacionamento[]}
        let lista: Component
        [list, lista] = teste({
            title: "Estacionamentos",
            list: estacionamentoList
        }, new ListaHorizontal())

        console.log(list)
        return this.main = AppLayout.inner(
            new Z("main").children(
                new Z("h1").text("Estacionamento"),
                new Z("button").text("Adicionar").click(()=> list.list.push(new Estacionamento("teste"))),
                await lista.create(list)
            )
        )
    }
}