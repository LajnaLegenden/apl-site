import { Router } from "express";
import AdminRouter from "./Admin";
import CompanyAdminRouter from "./CompanyAdmin";
import DefaultRouter from "./Default";
import SchoolAdminRouter from "./SchoolAdmin";
import StudentRouter from "./Student";
import SupervisorRouter from "./Supervisor";
import TeacherRouter from "./Teacher";

// Init router
const router = Router();

// Add sub-routes

// Routes for eg. login, signup, landingpage
router.use("/", DefaultRouter);
// Routes for teacher
router.use("/school/:school/teacher", TeacherRouter);
// Routes for Students
router.use("/school/:school/student", StudentRouter);
// Routes for School Admin
router.use("/school/:school/admin", SchoolAdminRouter);
// Routes for supeovisor
router.use("/company/:company/supervisor", SupervisorRouter);
// Routes for Company Admin
router.use("/company/:company/admin", CompanyAdminRouter);
// Routes for admin console
router.use("/admin", AdminRouter);

// Export the base-router
export default router;
