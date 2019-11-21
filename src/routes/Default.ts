import { Request, Response, Router } from "express";
import logger from "../modules/logger";
// import login from "../modules/login";
// Init shared
const router = Router();

// Routes

router.get("/", landingPage);

// Funtion for routes

async function landingPage(req: Request, res: Response) {
    res.render("index", { layout: "layout/default" });
    logger.log("Tootot");
}

// Export router
export default router;
