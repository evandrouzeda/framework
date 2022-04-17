import App from "../app.js";
import Icons from "../components/icons/_icons.js";
import ComponentMap from "../components/map.js";
import Modal from "../components/modal/modal.js";
import Marker from "../features/map/marker/domain/marker.js";
import FormCreateMarker from "../features/map/marker/form/create.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";

export default class Map implements Page {
    route = "/map";
    title = "Map";
    main = new Z("div");
    async create() {
        const menu = new Z("div").addClass("menu-background").children(
            new Z("div").addClass("menu").children(
                new Z("h1").text("Menu")
            )
        )
        return this.main = new Z("div").addClass("main", 'd-grid', 'gap-g').children(
            new Z("div").addClass("d-flex", "gap-m", "jc-between").children(
                Icons.get("menu").addClass("menu-icon").click(()=>menu.addClass("show")),
                new Z("h1").text("Liberaqua"),
                Icons.get("logo").addClass("menu-icon").click(()=>menu.addClass("show")),
            ),
            await ComponentMap.create(),
            new Z("button").addClass("add").click(e => {
                Modal.show(new FormCreateMarker(App.repository, new Marker()))
            }).children(
                Icons.get("add")
            ),
            menu.object(o => {
                o.element.onclick = () => o.element.classList.remove("show")
            })
        )
    }

}