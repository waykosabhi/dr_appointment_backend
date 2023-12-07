const express = require("express");
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(express.static("uploads"));
// app.use(express.static("reports"));
app.use(cookieParser());

app.use("/api/department", require("./routes/departmentRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));
app.use("/api/petient", require("./routes/petientRoutes"));

app.use((err, req, res, next) => {
  return res
    .status(500)
    .json({ message: err.message || "somthing went wrong" });
});

app.use((req, res) => {
  return res.status(404).json({ message: "Resource Not Found:404" });
});

mongoose.connection.once("open", () => {
  console.log("Database Connected");
  app.listen(PORT, console.log(`http://localhost:${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log("Unable to connect Database" + err);
});
