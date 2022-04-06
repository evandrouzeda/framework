import Field from "../../../core/entity/field.js"
import Form from "../../../core/entity/form.js"
import Repository from "../../../core/repository/_repository.js"
import Estacionamento from "../domain/estacionamento.js"

export default class FormSignup extends Form{
    constructor(repository: Repository, model: Estacionamento){
        super(repository, model, "Signup", "signup", "Create")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "nome": new Field("text", "Nome", "Nome")
        }
    }
}