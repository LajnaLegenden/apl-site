
import * as dotenv from "dotenv";
dotenv.config();

import { addListener } from "cluster";
import setUpHBS from "./modules/handlebarsSetup";
import logger from "./modules/logger";
import router from "./routes/Default";
import app from "./Server";


setUpHBS(app);
app.use(router);

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(port);
});
