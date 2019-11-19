import { Request, Response, Router } from "express";
import logger from "../modules/logger";
// Init shared
const router = Router();

// Routes

router.get("/", landingPage);

// Funtion for routes

async function landingPage(req: Request, res: Response) {
    logger.log(req);
    res.render("index");
}

// Export router
export default router;
