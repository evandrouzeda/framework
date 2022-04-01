import Password from "./password.js";
import Text from "./text.js";
export default class Fields {
    static list: {[key: string]: any} = {
        "text": Text,
        "password": Password
    }
}