const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Petient = require("../model/Petient");

exports.addPetient = asyncHandler(async (req, res) => {
  const isExist = await Petient.findOne({ name: req.body.name });
  if (isExist) {
    return res.status(400).json({ message: "Petient Already Added" });
  }
  let d = req.body.date
  let t = req.body.time
  let x = new Date()
  const result = await Petient.create(req.body);
  console.log(result);
  res.json({
    message: "Petient Added Successfully",
    result,
  });
});

exports.getAllPetient = asyncHandler(async (req, res) => {
  const result = await Petient.find();
  res.json({
    message: "Petient fetch successfully",
    result,
  });
});
exports.destroyPetient = asyncHandler(async (req, res) => {
  const result = await Petient.deleteMany();
  res.json({
    message: "Petient Destroy successfully",
    result,
  });
});
exports.updatePetient = asyncHandler(async (req, res) => {
  const { petientId } = req.params;
  const result = await Petient.findByIdAndUpdate(petientId, req.body, {
    new: true,
  });
  res.json({
    message: "Petient update successfully",
    result,
  });
});
exports.deletePetient = asyncHandler(async (req, res) => {
  const { petientId } = req.params;
  const result = await Petient.findByIdAndDelete(petientId);
  res.json({
    message: "Petient Delete successfully",
    result,
  });
});
