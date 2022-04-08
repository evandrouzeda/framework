export default class Adapters {
}
Adapters.list = {
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
};
