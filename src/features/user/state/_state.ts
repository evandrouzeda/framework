import Form from "../../../core/entity/form"
import FormLogin from "../form/login"
import FormSignup from "../form/signup.js"

export default interface FormState {
    texts: {pergunta: string; acao: string}
    form: typeof FormLogin
    alphabet?: {e: string, a: string}
    esqueci(): FormState
    acao(): FormState
}
