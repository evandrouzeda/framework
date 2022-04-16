export default class Marker {
    titulo = ""
    latlng: google.maps.LatLngLiteral = {
        lat: 0,
        lng: 0
    }

    constructor(titulo?: string, latlng?: google.maps.LatLngLiteral)
    constructor(titulo: string = "", latlng: google.maps.LatLngLiteral = {
        lat: 0,
        lng: 0
    }){
        this.titulo = titulo
        this.latlng = latlng
    }
}