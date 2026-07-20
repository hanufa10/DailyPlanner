import { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } from "../services/category.service.js";


export const createCategoryController = async (req, res) => {

    try {

        const { name, color } = req.body;

        const category = await createCategory(
            name,
            color,
            req.user.id
        );

        res.status(201).json({
            success: true,
            data: category
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const getCategoriesController = async (req, res) => {

    try {

        const categories = await getCategories(req.user.id);

        res.status(200).json({
            success: true,
            data: categories
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const getCategoryByIdController = async (req, res) => {
    try {

        const category = await getCategoryById(
            Number(req.params.id),
            req.user.id
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
export const updateCategoryController = async (req, res) => {
    try {

        const { name, color } = req.body;

        const category = await updateCategory(
            Number(req.params.id),
            name,
            color,
            req.user.id
        );


        if (category.count === 0) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }


        res.status(200).json({
            success: true,
            message: "Category updated successfully"
        });


    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const deleteCategoryController = async (req, res) => {
    try {

        const category = await deleteCategory(
            Number(req.params.id),
            req.user.id
        );


        if (category.count === 0) {
            return res.status(404).json({
                success:false,
                message:"Category not found"
            });
        }


        res.status(200).json({
            success:true,
            message:"Category deleted successfully"
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};