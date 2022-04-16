export default class Marker {
    constructor(titulo = "", latlng = {
        lat: 0,
        lng: 0
    }) {
        this.titulo = "";
        this.latlng = {
            lat: 0,
            lng: 0
        };
        this.titulo = titulo;
        this.latlng = latlng;
    }
}
