import mongoose, { Schema } from "mongoose";


const UserScoreSchema = new Schema({
    checkbox1:{type:Boolean,required:true},
    checkbox2:{type:Boolean,required:true},
    input3:{type:Number,required:true},
    input4:{type:Number,required:true},
    input5:{type:Number,required:true},
    input6:{type:Number,required:true},
    input7:{type:Number,required:true},
    input8:{type:Number,required:true},
    input9:{type:Number,required:true},
    input10:{type:Number,required:true},
    input11:{type:Number,required:true},
    result:{type:Number,required:true},
    name:{type:String,required:true},
},{timestamps:true})

const userListSchema = new Schema({
    scores:[UserScoreSchema]
})
const UserList = mongoose.models.UserList || mongoose.model('UserList',userListSchema)

const UserScore = mongoose.models.UserScore || mongoose.model('UserScore',UserScoreSchema)

export {UserScore,UserList}