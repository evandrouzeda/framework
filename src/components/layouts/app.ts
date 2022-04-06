import { Z } from "../../ui/zeyo.js";
import Button from "../button.js";

export default class AppLayout {
    static slot: Z = new Z("main")
    static main: Z = new Z("main").children(
        this.slot,
        new Z("nav").addClass("d-flex", "jc-evenly", "w-100", "bottom-fixed").children(
            new Button().create({text: "H", route:"/"}).addClass("w-100"),
            new Button().create({text: "E", route:"/estacionamento"}).addClass("w-100"),
            new Button().create({text: "D", route:"/dashboard"}).addClass("w-100"),
            new Button().create({text: "S", route:"/social/teste"}).addClass("w-100"),
        )
    )
    static inner(z: Z){
        this.slot.element.parentElement?.replaceChild(z.element, this.slot.element);
        this.slot = z
        return this.main
    }
}