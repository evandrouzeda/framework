import App from "../../app.js";
import Forms from "../../core/form/_list.js";
import FormUpdateEstacionamento from "../../features/estacionamento/form/update.js";
import { Zeyo } from "../../ui/lib.js";
import { Z } from "../../ui/zeyo.js";
import Bottom from "../modal/bottom.js";
import Component from "../_component.js";
import Adapters from "./adapter/_list.js";

export default class CardSimple implements Component {
    adapter: string
    fields: {[key: string]: string}
    constructor(adapter: string){
        this.adapter = adapter
        this.fields = {
            title: "",
            description: "",
        }
    }
    main: Z = new Z("div")
    create(o: any): Zeyo {
        const adapter = Adapters.list[this.adapter]
        adapter.mapfield.forEach(f => this.fields[f.component] = o[f.object])
        return this.main = new Z("div").children(
            new Z("h3").text(this.fields.title),
            new Z("p").text(this.fields.description)
            ).click(() => {
            Bottom.show(new Forms.list[adapter.action](App.repository, o))
        })
    };
}