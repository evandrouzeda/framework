import Field from "../../../core/entity/field.js";
import Form from "../../../core/entity/form.js";
export default class FormLogin extends Form {
    constructor(repository, model) {
        super(repository, model, "Login", "login", "Enter");
    }
    getFields() {
        return {
            "username": new Field("text", "Username", "Username"),
            "password": new Field("password", "Password", "Password")
        };
    }
}
