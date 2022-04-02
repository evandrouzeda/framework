import Form from "../../../core/entity/form"
import FormLogin from "../form/login"
import FormSignup from "../form/signup.js"

export default interface FormState {
    esqueci(): [FormState, typeof FormLogin]
    acao(): [FormState, typeof FormLogin]
}