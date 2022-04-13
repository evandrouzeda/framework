import App from "../../app.js";
import Forms from "../../core/form/_list.js";
import { Z } from "../../ui/zeyo.js";
import Modal from "../modal/modal.js";
import Adapters from "./adapter/_list.js";
export default class CardSimple {
    constructor(adapter) {
        this.main = new Z("div");
        this.adapter = adapter;
        this.fields = {
            title: "",
            description: "",
        };
    }
    create(o) {
        const adapter = Adapters.list[this.adapter];
        adapter.mapfield.forEach(f => this.fields[f.component] = o[f.object]);
        return this.main = new Z("div").children(new Z("h3").text(this.fields.title), new Z("p").text(this.fields.description)).click(() => {
            Modal.show(new Forms.list[adapter.action](App.repository, o));
        });
    }
    ;
}
