const complaintModel=require("../../server/Model/complaint.model")

const saveComplaints = async (req, res) => {
    try {
      const { name, email, complaint } = req.body;
  
      const complaints = new complaintModel({
        name,
        email,
        complaint,
      });
  
      await complaints.save();
  
      return res
        .status(201)
        .json({ message: "complaint registered successfully", data: complaints });
    } catch (error) {
      console.log("Error on registering complaint", error);
      return res.status(500).json({ message: "Server Error" ,error:error.message});
    }
  };
  
  const fetchComplaints = async (req, res) => {
    try {
      const complaints = await complaintModel.find();
  
      if (complaints.length === 0) {
        return res.status(404).json({ message: "No complaints found" });
      }
  
      return res
        .status(200)
        .json({ message: "Complaints fetched successfully", data: complaints });
    } catch (error) {
      console.log("Error on fetching complaint", error);
      return res.status(500).json({ message: "Server Error" });
    }
  };
  
  module.exports = {
    saveComplaints,
    fetchComplaints,
  };