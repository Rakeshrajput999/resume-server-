const { response } = require("express");
const Student = require("../models/Student");
const bcrypt =require("bcrypt")

// to save data of the user to the database         working

const addStudent = async (req, res) => {
  try {
    const user = await new Student(req.body);
    const result = await Student.insertMany([user]);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

//  to get the data of all student                working
const getStudent = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const user = await Student.findOne({ _id: req.params.id });
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editStudent = async (req, res) => {
  try {
    var user = await Student.findOne({ _id: req.params.id });
    user = req.body;

    await Student.updateOne({ _id: req.params.id }, { $set: user });
    var editUser = new Student(user);
    res.status(201).json(editUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const loginStudent = async (req, res) => {
  var { rollnu, password } = req.body;
  try {
    const loggedStudent = await Student.findOne({ rollnu:rollnu });
    console.log(password,loggedStudent.password)
    const isMatch = await bcrypt.compare(password, bcrypt.hashSync(loggedStudent.password,10));
    if (isMatch) {
      return res.status(200).json(loggedStudent);
    }else{
      return res.status(409).json("invalid information")
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addStudent,
  getStudent,
  getStudentById,
  editStudent,
  deleteStudent,
  loginStudent,
};


