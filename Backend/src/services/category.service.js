import prisma from "../config/prisma.js";


export const createCategory = async (name, color, userId) => {

    const category = await prisma.category.create({
        data: {
            name,
            color,
            userId
        }
    });

    return category;
};
export const getCategories = async (userId) => {

    const categories = await prisma.category.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return categories;
};
export const getCategoryById = async (categoryId, userId) => {

    const category = await prisma.category.findFirst({
        where: {
            id: categoryId,
            userId
        }
    });

    return category;
};
export const updateCategory = async (categoryId, name, color, userId) => {

    const category = await prisma.category.updateMany({
        where: {
            id: categoryId,
            userId
        },
        data: {
            name,
            color
        }
    });

    return category;
};
export const deleteCategory = async (categoryId, userId) => {

    const category = await prisma.category.deleteMany({
        where: {
            id: categoryId,
            userId
        }
    });
    return category;
};