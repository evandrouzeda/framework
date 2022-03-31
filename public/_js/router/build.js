import App from "../app.js";
export default class Build {
    static build(path) {
        //App.root.innerHTML = ""
        const params = {};
        const page = App.pages.find(p => {
            if (p.route === path)
                return true;
            else {
                const route = p.route.split("/");
                const pathname = path.split("/");
                if (route.length !== pathname.length)
                    return false;
                for (const i in route) {
                    if (route[i] !== pathname[i] && route[i][0] !== ":")
                        return false;
                    else if (route[i][0] === ":")
                        params[route[i].substring(1)] = pathname[i];
                }
                return true;
            }
        });
        const template = {
            route: "/404",
            title: "not found",
            children: [document.createElement("div")]
        };
        // aqui tem que chamar o builder para construir a pagina, passando os elementos por parametro
        if (page)
            Object.assign(template, page);
        template.children.forEach(e => App.root.appendChild(e));
    }
}
