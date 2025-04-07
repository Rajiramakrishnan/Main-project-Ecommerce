const express = require("express");
const AuthRouter=express.Router();
const {
    validateResetPassFieldsrequired,
  } = require("../Middlewares/validateEmailPasswordRequired");
  const { validateResetPassword } = require("../Middlewares/validatePassword");
  const {
    forgotPassword,
    updateAccountStatus,
  } = require("../controller/auth.controller");
  
  
  AuthRouter.patch(
    "/resetpassword",
    validateResetPassFieldsrequired,
    validateResetPassword,
    forgotPassword
  );
  AuthRouter.patch("/updateAccountStatus/:id", updateAccountStatus);
  module.exports = AuthRouter;