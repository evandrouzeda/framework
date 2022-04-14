import App from "./app.js"
import Button from "./components/button.js"
import AppLayout from "./components/layouts/app.js"
import RepositoryLocalStorage from "./core/repository/localStorage.js"
import Estacionamento from "./pages/estacionamento.js"
import Login from "./pages/login.js"
import Map from "./pages/map.js"
import Page from "./pages/page.js"
import { Z } from "./ui/zeyo.js"

console.log(window.location.pathname)
App.repository = new RepositoryLocalStorage()
const raiz = {
    text: "Raiz",
    route: "/"
}

const estacionameto = {
    text: "Estacionamento",
    route: "/estacionamento"
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
    main: new Z("div"),
    async create() {
        return AppLayout.inner(
            new Z("div").children(
                ...[raiz, estacionameto].map(b => new Button().create(b))
            )
        )
    }
})
App.pages.push(new Estacionamento)
App.pages.push(new Map)

App.pages.push({
    route: "/social/:usuario",
    auth: "",
    main: new Z("div"),
    async create(){
        return AppLayout.inner(
            new Z("div").children(
                ...[raiz, estacionameto].map(b => new Button().create(b))
            )
        )
    }
})

App.init()