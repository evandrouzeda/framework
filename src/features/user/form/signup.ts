import Extra from "../../../core/entity/extra.js";
import Field from "../../../core/entity/field.js";
import Form from "../../../core/entity/form.js";
import Repository from "../../../core/repository/_repository.js";
import User from "../domain/entity/user.js";

export default class FormSignup extends Form{
    constructor(repository: Repository, model: User){
        super(repository, model, "Signup", "signup", "Create")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "name": new Field("text", "Name", "Name"),
            "username": new Field("text", "Username", "Username"),
            "password": new Field("password", "Password", "Password")
        }
    }
}