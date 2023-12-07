const asyncHandler = require("express-async-handler");

const Department = require("../model/Department");

exports.addDepartment = asyncHandler(async (req, res) => {
  const isExist = await Department.findOne({ dName: req.body.dName });
  if (isExist) {
    return res.status(400).json({ message: "Department Already Added" });
  }
  const result = await Department.create(req.body);
  console.log(result);
  res.json({
    message: "Department Added Successfully",
  });
});
exports.getAllDepartment = asyncHandler(async (req, res) => {
  const result = await Department.find();
  res.json({
    message: "Department fetch successfully",
    result,
  });
});
exports.destroyDepartment = asyncHandler(async (req, res) => {
  const result = await Department.deleteMany();
  res.json({
    message: "Department Destroy successfully",
    result,
  });
});
exports.updateDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;
  const result = await Department.findByIdAndUpdate(departmentId, req.body, {
    new: true,
  });
  res.json({
    message: "Department update successfully",
    result,
  });
});
exports.deleteDepartment = asyncHandler(async (req, res) => {
  const { departmentId } = req.params;
  const result = await Department.findByIdAndDelete(departmentId);
  res.json({
    message: "Department Delete successfully",
    result,
  });
});
