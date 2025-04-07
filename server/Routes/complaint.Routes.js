const express=require("express")
const ComplaintRouter=express.Router();
const {saveComplaints,fetchComplaints}=require("../../server/controller/complaint.controller")
ComplaintRouter.post("/postcomplaint",saveComplaints);
ComplaintRouter.get("/getcomplaints",fetchComplaints);
module.exports=ComplaintRouter;