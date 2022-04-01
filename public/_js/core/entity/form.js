export default class Form {
    constructor(repository, model, title, controller, action) {
        this.fields = {};
        this.repository = repository;
        this.model = model;
        this.title = title;
        this.controller = controller;
        this.action = action;
    }
}
