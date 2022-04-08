var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "../app.js";
import CardSimple from "../components/cards/simple.js";
import AppLayout from "../components/layouts/app.js";
import ListaHorizontal from "../components/listaHorizontal.js";
import Bottom from "../components/modal/bottom.js";
import Watch from "../components/_watch.js";
import Carro from "../features/carro/domain/carro.js";
import FormCarro from "../features/carro/form/carro.js";
import ListCarro from "../features/carro/list.js";
import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import FormEstacionamento from "../features/estacionamento/form/estacionamento.js";
import ListEstacionamento from "../features/estacionamento/list.js";
import { Z } from "../ui/zeyo.js";
export default class PageEstacionamento {
    constructor() {
        this.route = "/estacionamento";
        this.main = new Z("main");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const [list, lista] = Watch({
                adapter: "estacionamento",
                title: "Estacionamentos",
                list: []
            }, new ListaHorizontal(CardSimple));
            ListEstacionamento.list = list;
            const [listcarro, listacarro] = Watch({
                adapter: "carro",
                title: "Carros",
                list: []
            }, new ListaHorizontal(CardSimple));
            ListCarro.list = listcarro;
            return this.main = AppLayout.inner(new Z("main").children(new Z("h1").text("Estacionamento"), new Z("button").text("Adicionar").click(() => __awaiter(this, void 0, void 0, function* () {
                Bottom.show(new FormEstacionamento(App.repository, new Estacionamento("")));
            })), yield lista.create(list), new Z("button").text("Adicionar").click(() => __awaiter(this, void 0, void 0, function* () {
                Bottom.show(new FormCarro(App.repository, new Carro("", "")));
            })), yield listacarro.create(listcarro)));
        });
    }
}
