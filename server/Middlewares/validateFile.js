const fileValidation = (req, res, next) => {
  const fileImg = req.file;
  console.log(fileImg);
  try {
    if (!fileImg) {
      return res.status(404).json({ message: "File not uploaded" });
    }
   

    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Err on signup", error: err.message });
  }
};
module.exports = { fileValidation };
