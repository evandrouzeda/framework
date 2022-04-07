import Field from "../../../core/entity/field.js"
import Form from "../../../core/entity/form.js"
import Repository from "../../../core/repository/_repository.js"
import Estacionamento from "../domain/estacionamento.js"

export default class FormUpdateEstacionamento extends Form{
    constructor(repository: Repository, model: Estacionamento){
        super(repository, model, model.nome, "update", "Atualizar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "nome": new Field("text", "Nome", "Nome"),
            "vagas": new Field("text", "Vagas", "Vaga")
        }
    }
}