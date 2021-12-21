const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    min: 10,
    required: true,
  },

  enrollment: {
    type: String,
  },
  rollnu: {
    type: Number,
  },
});

const student = new mongoose.model("Student", studentSchema);

module.exports = student;
