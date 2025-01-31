const emailValidation = (req, res, next) => {
    const { email } = req.body;
    console.log(email);
    
    try {
      if (!email) {
        return res.status(404).json({ message: "email id required" });
      }
      const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailregex.test(email)) {
        return res.status(400).send({ error: "Invalid email format" });
      }
      next();
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Err on signup", error: err.message });
    }
  };
  module.exports = { emailValidation };
  