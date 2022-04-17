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
import Icons from "../components/icons/_icons.js";
import ComponentMap from "../components/map.js";
import Modal from "../components/modal/modal.js";
import Marker from "../features/map/marker/domain/marker.js";
import FormCreateMarker from "../features/map/marker/form/create.js";
import { Z } from "../ui/zeyo.js";
export default class Map {
    constructor() {
        this.route = "/map";
        this.title = "Map";
        this.main = new Z("div");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = new Z("div").addClass("menu-background").children(new Z("div").addClass("menu").children(new Z("h1").text("Menu")));
            return this.main = new Z("div").addClass("main", 'd-grid', 'gap-g').children(new Z("div").addClass("d-flex", "gap-m", "jc-between").children(Icons.get("menu").addClass("menu-icon").click(() => menu.addClass("show")), new Z("h1").text("Liberaqua"), Icons.get("logo").addClass("menu-icon").click(() => menu.addClass("show"))), yield ComponentMap.create(), new Z("button").addClass("add").click(e => {
                Modal.show(new FormCreateMarker(App.repository, new Marker()));
            }).children(Icons.get("add")), menu.object(o => {
                o.element.onclick = () => o.element.classList.remove("show");
            }));
        });
    }
}
