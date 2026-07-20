import prisma from "../config/prisma.js";


export const createTask = async (
    title,
    description,
    priority,
    dueDate,
    categoryId,
    userId
) => {

    const task = await prisma.task.create({
        data: {
            title,
            description,
            priority,
            dueDate: dueDate ? new Date(dueDate) : null,
            categoryId: categoryId || null,
            userId
        }
    });

    return task;
};
export const getTasks = async (userId, filters) => {

    const where = {
        userId
    };

    if (filters.status) {
        where.status = filters.status;
    }

    if (filters.priority) {
        where.priority = filters.priority;
    }

    if (filters.categoryId) {
        where.categoryId = Number(filters.categoryId);
    }

    const tasks = await prisma.task.findMany({
        where,
        include: {
            category: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return tasks;
};
export const getTaskById = async(taskId,userId)=>{

    const task = await prisma.task.findFirst({
        where:{
            id:taskId,
            userId
        },
        include:{
            category:true
        }
    });

    return task;
};
export const getTasksByCategory = async(categoryId,userId)=>{

    return await prisma.task.findMany({

        where:{
            categoryId,
            userId
        },

        orderBy:{
            createdAt:"desc"
        }

    });

};
export const updateTask = async(
    taskId,
    userId,
    data
)=>{
    if (data.dueDate) {
        data.dueDate = new Date(data.dueDate);
    }
    const existingTask = await prisma.task.findFirst({
        where: {
            id: taskId,
            userId
        }
    });
    const task = await prisma.task.updateMany({
        where:{
            id:taskId,
            userId
        },
        data
    });
    return task;
};
export const updateTaskStatus = async(
    taskId,
    userId,
    status
)=>{

    return await prisma.task.updateMany({

        where:{
            id:taskId,
            userId
        },

        data:{
            status
        }

    });

};
export const deleteTask = async(taskId,userId)=>{

    return await prisma.task.deleteMany({

        where:{
            id:taskId,
            userId
        }

    });

};