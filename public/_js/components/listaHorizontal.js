import { Z } from "../ui/zeyo.js";
export default class ListaHorizontal {
    constructor() {
        this.main = new Z("div");
    }
    create(obj) {
        return this.main = new Z("div").children(new Z("h2").text(obj.title), ...obj.list.map(e => new Z("div").children(new Z("h3").text(e.nome))));
    }
}
