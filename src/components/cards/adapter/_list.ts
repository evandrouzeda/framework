interface Adapter {
    action: string
    mapfield: Array<{component: string, object: string}>
}
export default class Adapters {
    static list: { [key: string]: Adapter } = {
        "estacionamento": {
            action: "updateestacionamento",
            mapfield: [
                { component: "title", object: "nome" },
                { component: "description", object: "vagas" }
            ]
        },
        "carro": {
            action: "updatecarro",
            mapfield: [
                { component: "title", object: "nome" },
                { component: "description", object: "placa" }
            ]
        }
    }
}