import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import CardSimple from "./cards/simple.js";
import Component from "./_component.js";
import { ListParam } from "./_list.js";
import Watch from "./_watch.js";

export default class ListaHorizontal {
    component: typeof CardSimple
    constructor(component: typeof CardSimple){
        this.component = component
    }
    main = new Z("div")
    async create(obj: ListParam) {
        return this.main = new Z("div").children(
            new Z("h2").text(obj.title),
            ...(await Promise.all(obj.list.map(async e => {
                const [es, c]: [any, Component] = Watch(e, new this.component(obj.adapter));
                return await c.create(es)
            })))
        )
    }
}