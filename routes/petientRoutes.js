const {
  getAllPetient,
  addPetient,
  updatePetient,
  deletePetient,
  destroyPetient,
} = require("../controller/petientController");

const router = require("express").Router();

router
  .get("/", getAllPetient)
  .post("/add", addPetient)
  .put("/:petientId", updatePetient)
  .delete("/:petientId", deletePetient)
  .delete("/destroy", destroyPetient);

module.exports = router;
