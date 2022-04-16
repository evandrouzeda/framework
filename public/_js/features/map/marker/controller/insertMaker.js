import App from "../../../../app.js";
import Modal from "../../../../components/modal/modal.js";
import Map from "../../map.js";
import FormUpdateMarker from "../form/update.js";
export default class Insert {
    static marker(marker) {
        new google.maps.Marker({
            map: Map.map,
            title: marker.titulo,
            position: marker.latlng
        }).addListener("click", () => {
            Map.map.setCenter(marker.latlng);
            Modal.show(new FormUpdateMarker(App.repository, marker));
        });
    }
}
