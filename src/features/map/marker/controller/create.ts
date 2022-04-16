import App from "../../../../app.js"
import Modal from "../../../../components/modal/modal.js"
import Form from "../../../../core/entity/form.js"
import Map from "../../map.js"
import Marker from "../domain/marker.js"
import FormUpdateMarker from "../form/update.js"
import Insert from "./insertMaker.js"

export default class CreateMarker {
    static execute(form: {model: Marker}){
        console.log(form.model)
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            form.model.latlng.lat = position.coords.latitude
            form.model.latlng.lng = position.coords.longitude

            Insert.marker(form.model)
            Map.map.setCenter(form.model.latlng)
        })
        App.route.hash.remove()
    }
}