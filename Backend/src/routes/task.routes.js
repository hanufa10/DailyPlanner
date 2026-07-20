import express from "express";
import { createTaskController, getTasksController, getTaskByIdController, getTasksByCategoryController, updateTaskController, updateTaskStatusController, deleteTaskController } from "../controllers/task.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";


const router = express.Router();


router.post(
    "/",
    authenticate,
    createTaskController
);
router.get(
    "/",
    authenticate,
    getTasksController
);
router.get(
    "/:id",
    authenticate,
    getTaskByIdController
);
router.get(
    "/category/:categoryId",
    authenticate,
    getTasksByCategoryController
);
router.put(
    "/:id",
    authenticate,
    updateTaskController
);
router.patch(
 "/:id/status",
 authenticate,
 updateTaskStatusController
);
router.delete(
 "/:id",
 authenticate,
 deleteTaskController
);
export default router;