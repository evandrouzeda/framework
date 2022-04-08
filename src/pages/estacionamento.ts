import App from "../app.js";
import Button from "../components/button.js";
import CardSimple from "../components/cards/simple.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Bottom from "../components/modal/bottom.js";
import Component from "../components/_component.js";
import { ListParam } from "../components/_list.js";
import Watch from "../components/_watch.js";
import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import FormEstacionamento from "../features/estacionamento/form/estacionamento.js";
import ListEstacionamento from "../features/estacionamento/list.js";
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
        const [list, lista]: [ListParam, Component] = Watch({
            adapter: "estacionamentocardsimples",
            title: "Estacionamentos",
            list: estacionamentoList
        }, new ListaHorizontal(CardSimple))
        ListEstacionamento.list = list
        return this.main = AppLayout.inner(
            new Z("main").children(
                new Z("h1").text("Estacionamento"),
                new Z("button").text("Adicionar").click(async ()=> {
                    Bottom.show(new FormEstacionamento(App.repository, new Estacionamento("")))
                }),
                await lista.create(list)
            )
        )
    }
}