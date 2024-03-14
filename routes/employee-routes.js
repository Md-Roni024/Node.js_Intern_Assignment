const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const {createEmployee,getAllEmployee,getEmployeeByID,deleteEmployee, updateEmployee,blockEmployee } = require("../controllers/employee-controller");
const { employeeRegisterValidation,employeeUpdateValidation } = require("../validation/employeeValidator");
const { runValidation } = require("../validation/index");

router.post("/",employeeRegisterValidation,runValidation,createEmployee)
router.get("/",getAllEmployee)
router.get("/:id",getEmployeeByID)
router.patch("/:id",employeeUpdateValidation,runValidation, updateEmployee);
router.delete("/:id",deleteEmployee)
router.patch("/block/:id",blockEmployee)

module.exports = router