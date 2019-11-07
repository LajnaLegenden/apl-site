import { Router } from "express";
import DefaultRouter from "./Default";

// Init router and path
const router = Router();

// Add sub-routes
// router.use("/", MainRouter);
router.use("/", DefaultRouter);
// router.use("/teacher")

// Export the base-router
export default router;
