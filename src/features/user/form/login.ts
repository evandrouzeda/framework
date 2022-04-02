import Extra from "../../../core/entity/extra.js";
import Field from "../../../core/entity/field.js";
import Form from "../../../core/entity/form.js";
import Repository from "../../../core/repository/_repository.js";
import User from "../domain/entity/user.js";

export default class FormLogin extends Form{
    constructor(repository: Repository, model: User){
        super(repository, model, "Login", "login", "Enter")
    }
    getFields(): {[key: string]: Field}{
        return {
            "username": new Field("text", "Username", "Username"),
            "password": new Field("password", "Password", "Password")
        }
    }
}