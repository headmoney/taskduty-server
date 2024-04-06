const TASKS = require('../model/taskModel');
const { populate } = require('../model/userModel');

// post ftn, C --  for create CRUD operations

const createTask = async(req, res)=>{
    const {title,description,tags} = req.body;
    req.body.createdBy = req.user.userId;

    if(!title || !description || !tags){
        res.status(400).json({success:false,message:"Please fill all fields"});
        return
    }
    try {
        await TASKS.create(req.body);
        res.status(201).json({success:true,
        message:"task created sucessfully"});
    } catch (error) {
        res.status(500).json(error);
        
    }
}


// get ftn, R -- for read in CRUD operation

const getAllTasksByUser = async(req,res)=>{
    const {userId} = req.user;
    try {
        const task = await TASKS.find({createdBy:userId}).
        populate("createdBy");
        res.status(200).json({success:true,message:"users task", task})
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports = {
    createTask,
    getAllTasksByUser

}