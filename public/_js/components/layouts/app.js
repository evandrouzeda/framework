var _a;
import { Z } from "../../ui/zeyo.js";
import Button from "../button.js";
export default class AppLayout {
    static inner(z) {
        var _b;
        (_b = this.slot.element.parentElement) === null || _b === void 0 ? void 0 : _b.replaceChild(z.element, this.slot.element);
        this.slot = z;
        return this.main;
    }
}
_a = AppLayout;
AppLayout.slot = new Z("main");
AppLayout.main = new Z("main").children(_a.slot, new Z("nav").addClass("d-flex", "jc-evenly", "w-100", "bottom-fixed").children(new Button().create({ text: "H", route: "/" }).addClass("w-100"), new Button().create({ text: "E", route: "/estacionamento" }).addClass("w-100"), new Button().create({ text: "D", route: "/dashboard" }).addClass("w-100"), new Button().create({ text: "S", route: "/social/teste" }).addClass("w-100")));
