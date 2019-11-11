import { Request, Response, Router } from "express";

// Init shared
const router = Router();

// Routes

router.get("/", landingPage);

// Funtion for routes

async function landingPage(req: Request, res: Response) {
    res.render('index');
}

// Export router
export default router;
