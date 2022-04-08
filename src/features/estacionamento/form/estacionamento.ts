import Field from "../../../core/entity/field.js"
import Form from "../../../core/entity/form.js"
import Repository from "../../../core/repository/_repository.js"
import Estacionamento from "../domain/estacionamento.js"

export default class FormEstacionamento extends Form{
    constructor(repository: Repository, model: Estacionamento){
        super(repository, model, "Criar Estacionamento", "createestacionamento", "Criar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "nome": new Field("text", "Nome", "Nome")
        }
    }
}