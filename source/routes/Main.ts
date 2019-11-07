import { Router } from "express";
import defaultRouter from "./Default";

// Init router and path
const router = Router();

// Add sub-routes
// router.use("/", MainRouter);
router.use("/", defaultRouter);
// router.use("/teacher")

// Export the base-router
export default router;
