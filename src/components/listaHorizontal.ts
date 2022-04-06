import Estacionamento from "../features/estacionamento/domain/estacionamento.js";
import { Z } from "../ui/zeyo.js";

export default class ListaHorizontal {
    main = new Z("div")
    create(obj: {type: string; title: string; list: Estacionamento[]}){
        return this.main = new Z("div").children(
            new Z("h2").text(obj.title),
            ...obj.list.map(e => new Z("div").children(
                new Z("h3").text(e.nome)
            ))
        )
    }
}