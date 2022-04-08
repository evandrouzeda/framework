import Field from "../../../core/entity/field.js"
import Form from "../../../core/entity/form.js"
import Repository from "../../../core/repository/_repository.js"
import Carro from "../domain/carro.js"

export default class FormCarro extends Form{
    constructor(repository: Repository, model: Carro){
        super(repository, model, "Criar Carro", "createcarro", "Criar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "nome": new Field("text", "Nome", "Nome"),
            "placa": new Field("text", "Placa", "0l2kfa1l"),
        }
    }
}