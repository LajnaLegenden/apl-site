// Set up env variables
import * as dotenv from "dotenv";
dotenv.config();

// Other imports
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as express from "express";
import session from "express-session";
import passport from "passport";
import setUpHBS from "./modules/handlebarsSetup";
import logger from "./modules/logger";
import router from "./routes/Default";
import app from "./Server";


setUpHBS(app);
app.use(router);

// Publis shit
app.use(express.static(__dirname + "/public"));

// Setup cookieparser, bodyparser, express session, and passport
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: process.env.COOKIESECRET || "thisissosecure", saveUninitialized: false, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(port);
});
