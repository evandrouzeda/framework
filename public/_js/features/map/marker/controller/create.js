import App from "../../../../app.js";
import Map from "../../map.js";
import Insert from "./insertMaker.js";
export default class CreateMarker {
    static execute(form) {
        console.log(form.model);
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            form.model.latlng.lat = position.coords.latitude;
            form.model.latlng.lng = position.coords.longitude;
            Insert.marker(form.model);
            Map.map.setCenter(form.model.latlng);
        });
        App.route.hash.remove();
    }
}
