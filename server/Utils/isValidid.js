const {default:mongoose}=require("mongoose");
const isvalidId=(id)=>{
    return mongoose.Types.ObjectId.isValid(id);

}
module.exports={isvalidId}