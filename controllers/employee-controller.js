const Employee = require("../models/employee-model")
const {v4:uuidv4} = require("uuid")

//Task-1:Create Employee
const createEmployee = async (req,res)=>{
    try{
        const employeeCreated = new Employee({
            id:uuidv4(),
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
        })
        //Check if an employee with the same email already exists
        const existingEmployee = await Employee.findOne({ email: req.body.email });
        if (existingEmployee) {
          return res.status(400).json({ error: 'Employee with the same email already exists' });
        }
        await employeeCreated.save()
        res.status(201).json(employeeCreated);
    }catch(err){
        res.status(500).send(err.message)
    }
}
//Task-2: Get All Employee
const getAllEmployee = async (req,res)=>{
    try{
        const employeeAll = await Employee.find()
        res.status(200).json(employeeAll);
    }catch(err){
        res.status(500).send(err.message)
    }
}

//Get Employee By ID:
const getEmployeeByID = async (req, res) => {
    try {
      const employeeByID = await Employee.findOne({ id: req.params.id });
      if(employeeByID){
        res.status(200).json(employeeByID);
      }else{
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  const updateEmployee = async (req, res) => {
    try {
      const employeeUpdate = await Employee.findOne({ id: req.params.id });
      if(employeeUpdate){
        employeeUpdate.firstname = req.body.firstname;
        employeeUpdate.lastname =req.body.lastname
        employeeUpdate.phonenumber = req.body.phonenumber
        await employeeUpdate.save();
        res.status(200).json(employeeUpdate);
      }else{
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

const deleteEmployee = async (req, res) => {
    try {
      const existEmployee = await Employee.findOne({ id: req.params.id });
      if(existEmployee){
        await Employee.deleteOne(existEmployee);
        res.status(200).json({ message: "Employee is deleted" });
      }else{
        res.status(404).json({ error: 'Employee not found' });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

const blockEmployee = async (req,res)=>{
  try{
    const existingEmployee = await Employee.findOne({ id: req.params.id })
    if(existingEmployee){
      existingEmployee.blocked = !existingEmployee.blocked;
      await existingEmployee.save();
      res.status(200).json(existingEmployee);
    }else{
      res.status(404).json({ error: 'Employee not found' });
    }
  }catch(err){
    res.status(500).json({ error: 'Failed to update employee' });
  }
}


module.exports = {createEmployee,getAllEmployee,getEmployeeByID,updateEmployee,deleteEmployee,blockEmployee}