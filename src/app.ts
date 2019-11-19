import app from "./Server";


import setUpHBS from "./modules/handlebarsSetup";
import router from "./routes/Default";


setUpHBS(app);
app.use(router);


// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    console.log(port);
});
