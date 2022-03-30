import Page from "./page";

export default class App {
    static pages: Page[] = []
    static root: HTMLElement = document.querySelector("#root")!
    static init(){
        this.build(window.location.pathname)
        window.onpopstate = e => {
            e.preventDefault()
            this.build(window.location.pathname)
        }
    }
    static build(path: string) {
        console.log("renderizando a pagina");
        
        this.root.innerHTML = ""
        const params: { [key: string]: string } = {}
        const page = this.pages.find(p => {
            if (p.route === path) return true
            else {
                const route = p.route.split("/")
                const pathname = path.split("/")
                if (route.length !== pathname.length) return false
                for (const i in route) {
                    if (route[i] !== pathname[i] && route[i][0] !== ":")
                        return false
                    else if (route[i][0] === ":") params[route[i].substring(1)] = pathname[i]
                }
                return true
            }
        })
        const template: Page = {
            route: "/404",
            title: "not found",
            children: [document.createElement("div")]
        }
        // aqui tem que chamar o builder para construir a pagina, passando os elementos por parametro
        if (page) Object.assign(template, page)
        
        window.history.pushState({ state: "" }, "", template.route)
    }
}