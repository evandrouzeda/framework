var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Field from "../../../core/entity/field.js";
import Form from "../../../core/entity/form.js";
export default class FormCarro extends Form {
    constructor(repository, model) {
        super(repository, model, "Criar Carro", "createcarro", "Criar");
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                "nome": new Field("text", "Nome", "Nome"),
                "placa": new Field("text", "Placa", "0l2kfa1l"),
            };
        });
    }
}
