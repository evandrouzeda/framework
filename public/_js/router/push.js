import Build from "./build.js";
export default class Push extends Build {
    static push(path) {
        window.history.pushState({ state: "" }, "", path);
        this.build(path);
    }
}
