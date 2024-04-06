const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = Schema({
    title:{
        type:String,
        required:[true, "title is required"]
    },

    description:{
        type:String,
        required:[true, "description is required"]
    },

    tags:{
        type:String,
        enum:["important", "urgent"],
        required:true
    },

    tags:{
        type:String,
    },

    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true});

const TASKS = mongoose.model('task', taskSchema);

module.exports = TASKS;