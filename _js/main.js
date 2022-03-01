console.log(window.location.pathname)
const root = document.getElementById("root")

const raiz = document.createElement("button")
raiz.innerText = "Raiz"
raiz.onclick = _ => {
    window.history.pushState({ state: "raiz" }, "Raiz", "/")
    setPage()
}

const estacionameto = document.createElement("button")
estacionameto.innerText = "Estacionamento"
estacionameto.onclick = _ => {
    window.history.pushState({ state: "estacionameto" }, "Estacionamento", "/estacionamento")
    setPage()
}
const dashboard = document.createElement("button")
dashboard.innerText = "Dashboard"
dashboard.onclick = _ => {
    window.history.pushState({ state: "dashboard" }, "Dashboard", "/dashboard")
    setPage()
}

const back = document.createElement("button")
back.innerText = "Voltar"
back.onclick = _ => { window.history.back() }

const e404 = document.createElement("p")
e404.innerText = "Pagina não encontrada"
const app = {
    pages: [
        {
            route: "/",
            auth: "",
            children: [estacionameto, dashboard]
        },
        {
            route: "/estacionamento",
            auth: "",
            children: [raiz, dashboard]
        },
        {
            route: "/dashboard",
            auth: "accessController",
            children: [raiz, estacionameto]
        },
        {
            route: "/social/:usuario",
            auth: "",
            children: [raiz, dashboard]
        }
    ]
}
function setPage() {
    root.innerHTML = ""
    const params = {}
    const page = app.pages.find(p => {
        if (p.route === window.location.pathname) return true
        else {
            const route = p.route.split("/")
            const path = window.location.pathname.split("/")
            if(route.length !== path.length) return false
            for (const i in route) {
                if (route[i] !== path[i] && route[i][0] !== ":")
                    return false
                else if(route[i][0] === ":") params[route[i].substring(1)] = path[i]
            }
            return true
        }
    })
    console.log(params);
    if (page)// aqui tem que chamar o builder para construir a pagina, passando os elementos por parametro
        page.children.forEach(e => root.appendChild(e))
    else
        [raiz, e404].forEach(e => root.appendChild(e))
}
setPage()
window.onpopstate = setPage
