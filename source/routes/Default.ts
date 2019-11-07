
import { Request, Response, Router } from "express";

// Init shared
const router = Router();


router.get("", main);

router.get("login", login);






async function main(req: Request, res: Response) {
    res.render("index");
}
async function login(req: Request, res: Response) {
    res.render("index");
}

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
