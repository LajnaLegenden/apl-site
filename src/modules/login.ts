/* import passport from "passport";
import LocalStrategy from "passport-local";
import logger from "./logger";

const Strat = LocalStrategy.Strategy;

passport.use(new Strat((username, password, done) => {
    logger.log(username, password, done);

    if (true) {
        return done(null, user);

    } else {
        return done(null, false, { message: "Invalid password" });
    }

    if (err) {
        return done(err);
    }
}));

 */
