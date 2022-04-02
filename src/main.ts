import App from "./app.js"
import Login from "./pages/login.js"
import Page from "./pages/page.js"
import { Z } from "./ui/zeyo.js"

console.log(window.location.pathname)

const raiz = {
    text: "Raiz",
    route: "/"
}

const estacionameto = {
    text: "Estacionamento",
    route: "/estacionamento"
}

const dashboard = {
    text: "Dashboard",
    route: "/dashboard"
}

const back = document.createElement("button")
back.innerText = "Voltar"
back.onclick = _ => { window.history.back() }

const login: Page = new Proxy(new Login, {
    set: (target, key, value) => {
        console.log(`${String(key)} set to value ${value}`)
        target[key as keyof typeof target] = value
        return true
    }
})

App.pages.push(login)
App.pages.push({
    route: "/dashboard",
    auth: "accessController",
    async create() {
        return new Z("div").children(
            ...[raiz, estacionameto].map(b => new Z("button").object(z => {
                z.element.innerText = b.text
                z.element.onclick = () => {
                    App.route.push(b.route)
                }
            }))
        )
    }
})
App.pages.push({
    route: "/estacionamento",
    auth: "",
    async create(){
        return new Z("main").children(
            ...[raiz, dashboard].map(b => new Z("button").object(z => {
                z.element.innerText = b.text
                z.element.onclick = () => {
                    App.route.push(b.route)
                }
            }))
        )
    }
})
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    async create(){
        return new Z("div").children(
            ...[raiz, dashboard].map(b => new Z("button").object(z => {
                z.element.innerText = b.text
                z.element.onclick = () => {
                    App.route.push(b.route)
                }
            }))
        )
    }
})

App.init()