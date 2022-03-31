import Build from "./build.js";

export default class Push extends Build{
    static push(path: string) {
        window.history.pushState({ state: "" }, "", path)
        this.build(path)
    }
}