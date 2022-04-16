import App from "../app.js";
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
        return this.main = new Z("div").addClass("main", 'd-grid', 'gap-m').children(
            new Z("h1").text("LiberAqua"),
            await ComponentMap.create(),
            new Z("button").text("Adicionar").addClass("add").click(e => {
                Modal.show(new FormCreateMarker(App.repository, new Marker()))
            }),
        )
    }

}