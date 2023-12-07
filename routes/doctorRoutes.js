const {
  getAllDoctor,
  destroyDoctor,
  updateDoctor,
  deleteDoctor,
  addDoctors,
} = require("../controller/doctorController");

const router = require("express").Router();

router
  .get("/", getAllDoctor)
  .post("/add", addDoctors)
  .put("/:doctorId", updateDoctor)
  .delete("/:doctorId", deleteDoctor)
  .delete("/destroy", destroyDoctor);

module.exports = router;
