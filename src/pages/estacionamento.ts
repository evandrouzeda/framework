import App from "../app.js";
import Button from "../components/button.js";
import CardSimple from "../components/cards/simple.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Bottom from "../components/modal/bottom.js";
import Modal from "../components/modal/modal.js";
import Component from "../components/_component.js";
import { ListParam } from "../components/_list.js";
import Watch from "../components/_watch.js";
import Carro from "../features/carro/domain/carro.js";
import FormCarro from "../features/carro/form/carro.js";
import ListCarro from "../features/carro/list.js";
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
        const [list, lista]: [ListParam, Component] = Watch({
            adapter: "estacionamento",
            title: "Estacionamentos",
            list: []
        }, new ListaHorizontal(CardSimple))
        ListEstacionamento.list = list
        const [listcarro, listacarro]: [ListParam, Component] = Watch({
            adapter: "carro",
            title: "Carros",
            list: []
        }, new ListaHorizontal(CardSimple))
        ListCarro.list = listcarro
        return this.main = AppLayout.inner(
            new Z("main").children(
                new Z("h1").text("Estacionamento"),
                new Z("button").text("Adicionar").click(async ()=> {
                    Modal.show(new FormEstacionamento(App.repository, new Estacionamento("")))
                }),
                await lista.create(list),
                new Z("button").text("Adicionar").click(async ()=> {
                    Modal.show(new FormCarro(App.repository, new Carro("", "")))
                }),
                await listacarro.create(listcarro)
            )
        )
    }
}