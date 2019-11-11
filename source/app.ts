import app from "./Server";

import setUpHBS from "./modules/handlebarsSetup";

setUpHBS(app);


// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(port);
});