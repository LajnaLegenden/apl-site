
import { Request, Response, Router } from "express";

// Init shared
const router = Router();



router.get("/", main);








async function main(req: Request, res: Response) {
    console.log(req);
    res.send("OK");
}

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
