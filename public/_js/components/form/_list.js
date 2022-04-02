import Esqueci from "./esqueceu.js";
import Password from "./password.js";
import Text from "./text.js";
export default class Fields {
}
Fields.list = {
    "text": new Text,
    "password": new Password,
    "esqueci": new Esqueci
};
