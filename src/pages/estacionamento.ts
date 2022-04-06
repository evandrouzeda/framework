import Button from "../components/button.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Component from "../components/_component.js";
import Watch from "../components/_watch.js";
import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";

export default class PageEstacionamento implements Page {
    route = "/estacionamento";
    title?: string | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main = new Z("main");
    async create() {
        const estacionamentoList: Estacionamento[] = []
        let list: {title: string; list: Estacionamento[]}
        let lista: Component
        [list, lista] = Watch({
            title: "Estacionamentos",
            list: estacionamentoList
        }, new ListaHorizontal())

        return this.main = AppLayout.inner(
            new Z("main").children(
                new Z("h1").text("Estacionamento"),
                new Z("button").text("Adicionar").click(()=> list.list.push(new Estacionamento("teste"))),
                await lista.create(list)
            )
        )
    }
}