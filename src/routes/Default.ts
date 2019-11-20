import { Request, Response, Router } from "express";
import logger from "../modules/logger";
// Init shared
const router = Router();

// Routes

router.get("/", landingPage);

// Funtion for routes

async function landingPage(req: Request, res: Response) {
    res.render("index");
    logger.log("Tootot");
}

// Export router
export default router;
