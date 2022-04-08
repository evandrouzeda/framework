import CreateCarro from "../../features/carro/controller/create.js";
import UpdateCarro from "../../features/carro/controller/update.js";
import Create from "../../features/estacionamento/controller/create.js";
import Update from "../../features/estacionamento/controller/update.js";
export default class Controllers {
}
Controllers.list = {
    "createcarro": CreateCarro,
    "updatecarro": UpdateCarro,
    "createestacionamento": Create,
    "updateestacionamento": Update,
};
