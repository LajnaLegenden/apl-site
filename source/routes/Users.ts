
import { Request, Response, Router, Express } from "express";


// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get("/all", async (req: Request, res: Response) => {
    console.log(req);
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
