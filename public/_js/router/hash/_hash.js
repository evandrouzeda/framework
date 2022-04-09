import Push from "./push.js";
export default class Hash extends Push {
    static remove() {
        if (this.on)
            window.history.back();
        this.modal.main.element.remove();
    }
}
Hash.on = false;
