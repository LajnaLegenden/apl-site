import * as express from "express";
import hbs from "hbs";

function setUpHbs(app: express.Application) {
    // Use hbs as view engine
    app.set("view engine", "hbs");
    // Load partials from the /views/partials dir
    hbs.registerPartials(__dirname + "/views/partials");

    app.set('views', __dirname + '/views');
}

export default setUpHbs;
