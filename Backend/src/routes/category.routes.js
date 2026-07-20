import express from "express";
import { createCategoryController, getCategoriesController, getCategoryByIdController, updateCategoryController, deleteCategoryController } from "../controllers/category.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";


const router = express.Router();


router.post(
    "/",
    authenticate,
    createCategoryController
);
router.get(
    "/",
    authenticate,
    getCategoriesController
);
router.get(
    "/:id",
    authenticate,
    getCategoryByIdController
);
router.put(
    "/:id",
    authenticate,
    updateCategoryController
);
router.delete(
    "/:id",
    authenticate,
    deleteCategoryController
);

export default router;