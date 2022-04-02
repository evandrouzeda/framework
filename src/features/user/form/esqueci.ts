import Field from "../../../core/entity/field.js";
import Form from "../../../core/entity/form.js";
import Repository from "../../../core/repository/_repository.js";
import User from "../domain/entity/user.js";

export default class FormEsqueci extends Form{
    constructor(repository: Repository, model: User){
        super(repository, model, "Recuperação de Senha", "esqueci", "Enviar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "username": new Field("text", "E-mail para recuperação", "example@domain.com"),
        }
    }
}