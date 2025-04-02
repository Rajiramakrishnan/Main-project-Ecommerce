const validatProductAddRequiredFields=(req,res,next)=>{
    console.log("field validation working");
    
    
        const{title,subTitle,category,actualPrice,discountPercent,description,specification,care}=req.body;
        if(!title||!subTitle||!category||!actualPrice||!discountPercent||!description||!specification||!care){
            return res.status(400).json({ message: "All fields are required" });
  
        }
        next();
}
const validateDiscount = async (req, res, next) => {
    try {
      console.log("discount validation working");
      
      const { discountPercent, actualPrice } = req.body;
  
      // console.log(typeof discountPercent, typeof actualPrice);
      // let discountPercentNum = parseFloat(discountPercent);
      // let actualPriceNum = parseFloat(actualPrice);
      if (!(discountPercent >= 0 && discountPercent < 100)) {
        return res
          .status(400)
          .json({ message: "DiscountPercent is not in the limit" });
      }
  
      let discount = discountPercent / 100;
      let discountAmount = actualPrice * discount;
      let reducedPrice = actualPrice - discountAmount;
      console.log(reducedPrice);
      
  
      req.currentPrice = Math.round(reducedPrice);
      req.discountPriceApplied = Math.round(discountAmount);
      console.log("req", req.currentPrice, req.discountPriceApplied);
      next();
    } catch (error) {
      console.log("Error in discount calculation", error);
      return res.status(500).json({ message: "Error on discount calculation" });
    }
  };
  module.exports={validateDiscount,validatProductAddRequiredFields}