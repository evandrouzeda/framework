import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import CardSimple from "./cards/simple.js";
import Component from "./_component.js";
import Watch from "./_watch.js";

export default class ListaHorizontal {
    main = new Z("div")
    async create(obj: { type: string; title: string; list: any[] }) {
        return this.main = new Z("div").children(
            new Z("h2").text(obj.title),
            ...(await Promise.all(obj.list.map(async e => {
                const [es, c]: [any, Component] = Watch(e, new CardSimple());
                return await c.create(es)
            })))
        )
    }
}