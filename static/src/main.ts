import App from "./app"

console.log(window.location.pathname)

const raiz = document.createElement("button")
raiz.innerText = "Raiz"
raiz.onclick = _ => {
    App.build("/")
}

const estacionameto = document.createElement("button")
estacionameto.innerText = "Estacionamento"
estacionameto.onclick = _ => {
    App.build("/estacionamento")
}
const dashboard = document.createElement("button")
dashboard.innerText = "Dashboard"
dashboard.onclick = _ => {
    App.build("/dashboard")
}

const back = document.createElement("button")
back.innerText = "Voltar"
back.onclick = _ => { window.history.back() }

App.pages.push({
    route: "/",
    children: [estacionameto, dashboard]
})
App.pages.push({
    route: "/dashboard",
    auth: "accessController",
    children: [raiz, estacionameto]
})
App.pages.push({
    route: "/estacionamento",
    auth: "",
    children: [raiz, dashboard]
})
App.pages.push({
    route: "/social/:usuario",
    auth: "",
    children: [raiz, dashboard]
})

App.init()