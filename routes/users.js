var express = require("express");
var router = express.Router();
// var RegisterChecks =require("../middleware/RegisterChecks")
// var Register =require("../controllers/Register")
require("../database/conn");
const Student = require("../models/Student");
const {
  addStudent,
  getStudent,
  getStudentById,
  editStudent,deleteStudent,loginStudent
} = require("../controllers/studentCrud");


/* GET users listing. */

/**
 * @description {email first name lastname  paswword conferm password } = req.body
 * security performance edge cses
 * level 1
 * email validaton
 * password validaton
 * password conferm password same
 * lecel 2
 *
 * javascript and sql injection
 * level 3
 * check if email already exist
 * emaail.lowercase
 * save
 *
 */
// create a new student
// login 
router.post("/login",loginStudent)


// add data

router.post("/",addStudent);
// show all data
router.get("/",getStudent);
// to update document
router.put("/:id",editStudent );
// to get one student by id 
router.get("/:id",getStudentById)
//to delete Student 
router.delete("/:id",deleteStudent)
module.exports = router;
