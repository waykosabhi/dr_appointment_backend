const asyncHandler = require("express-async-handler");
const Doctor = require("../model/Doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.addDoctors = asyncHandler(async (req, res) => {
  const isExist = await Doctor.findOne({ name: req.body.name });
  if (isExist) {
    return res.status(400).json({ message: "Doctor Already Added" });
  }
  const result = await Doctor.create(req.body);
  console.log(result);
  res.json({
    message: "Doctor Added Successfully",
    result,
  });
});

exports.getAllDoctor = asyncHandler(async (req, res) => {
  const result = await Doctor.find();
  res.json({
    message: "Doctor fetch successfully",
    result,
  });
});
exports.destroyDoctor = asyncHandler(async (req, res) => {
  const result = await Doctor.deleteMany();
  res.json({
    message: "Doctor Destroy successfully",
    result,
  });
});
exports.updateDoctor = asyncHandler(async (req, res) => {
  const { doctorId } = req.params;
  const result = await Doctor.findByIdAndUpdate(doctorId, req.body, {
    new: true,
  });
  res.json({
    message: "Doctor update successfully",
    result,
  });
});
exports.deleteDoctor = asyncHandler(async (req, res) => {
  const { doctorId } = req.params;
  const result = await Doctor.findByIdAndDelete(doctorId);
  res.json({
    message: "Doctor Delete successfully",
    result,
  });
});
