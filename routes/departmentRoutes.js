const {
  getAllDepartment,
  addDepartment,
  updateDepartment,
  deleteDepartment,
  destroyDepartment,
} = require("../controller/departmentController");

const router = require("express").Router();

router
  .get("/", getAllDepartment)
  .post("/add", addDepartment)
  .put("/:departmentId", updateDepartment)
  .delete("/:departmentId", deleteDepartment)
  .delete("/destroy", destroyDepartment);

module.exports = router;
