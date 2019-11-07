
import { Request, Response, Router } from "express";

// Init shared
const router = Router();



router.get("/", main);








async function main(req: Request, res: Response) {
    res.render("index");
}

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
