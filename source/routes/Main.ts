import { Router } from "express";
import UserRouter from "./Users";

// Init router and path
const router = Router();

// Add sub-routes
// router.use("/", MainRouter);
router.use("/school/:school/teacher", UserRouter);
// router.use("/teacher")

// Export the base-router
export default router;
