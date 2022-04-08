import Field from "../../../core/entity/field.js"
import Form from "../../../core/entity/form.js"
import Repository from "../../../core/repository/_repository.js"
import Carro from "../domain/carro.js"

export default class FormUpdateCarro extends Form{
    constructor(repository: Repository, model: Carro){
        super(repository, model, model.nome, "updatecarro", "Atualizar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "nome": new Field("text", "Nome", "Nome"),
            "placa": new Field("text", "Placa", "Placa")
        }
    }
}