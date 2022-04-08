import FormUpdateCarro from "../../features/carro/form/update.js";
import FormUpdateEstacionamento from "../../features/estacionamento/form/update.js";

export default class Forms {
    static list: {[key: string]: any} = {
        "updatecarro": FormUpdateCarro,
        "updateestacionamento": FormUpdateEstacionamento
    }
}