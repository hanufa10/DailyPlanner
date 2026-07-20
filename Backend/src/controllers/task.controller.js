import { createTask,getTasks, getTaskById, getTasksByCategory, updateTaskStatus, updateTask, deleteTask } from "../services/task.service.js";


export const createTaskController = async (req, res) => {

    try {

        const {
            title,
            description,
            priority,
            dueDate,
            categoryId
        } = req.body;


        const task = await createTask(
            title,
            description,
            priority,
            dueDate,
            categoryId,
            req.user.id
        );


        res.status(201).json({
            success: true,
            data: task
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const getTasksController = async (req, res) => {

    try {

        const tasks = await getTasks(
            req.user.id,
            req.query
        );

        res.status(200).json({
            success: true,
            data: tasks
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
export const getTaskByIdController = async(req,res)=>{

    try{

        const task = await getTaskById(
            Number(req.params.id),
            req.user.id
        );


        if(!task){
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }


        res.json({
            success:true,
            data:task
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const getTasksByCategoryController = async(req,res)=>{

    try{
        const tasks = await getTasksByCategory(
            Number(req.params.categoryId),
            req.user.id
        );
        if(tasks.length===0){
            return res.status(404).json({
                success:false,
                message: "Task not found under this category"
            });
        }
        res.json({
            success:true,
            data:tasks
        });
    }
    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}
export const updateTaskController = async(req,res)=>{

    try{

        const task = await updateTask(
            Number(req.params.id),
            req.user.id,
            req.body
        );


        if(task.count===0){
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }


        res.json({
            success:true,
            message:"Task updated"
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const updateTaskStatusController = async(req,res)=>{

    try{

        const task = await updateTaskStatus(
            Number(req.params.id),
            req.user.id,
            req.body.status
        );


        if(task.count===0){
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }


        res.json({
            success:true,
            message:"Task status updated"
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};
export const deleteTaskController = async(req,res)=>{

    try{
        const task = await deleteTask(
            Number(req.params.id),
            req.user.id
        );

        if(task.count===0){
            return res.status(404).json({
                success:false,
                message:"Task not found"
            });
        }

        res.json({
            success:true,
            message:"Task deleted"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};