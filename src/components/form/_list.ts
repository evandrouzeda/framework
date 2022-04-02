import { Z } from "../../ui/zeyo.js";
import Esqueci from "./esqueceu.js";
import Password from "./password.js";
import Text from "./text.js";
import FormElement from "./_element.js";
export default class Fields {
    static list: {[key: string]: FormElement} = {
        "text": new Text,
        "password": new Password,
        "esqueci": new Esqueci
    }
}