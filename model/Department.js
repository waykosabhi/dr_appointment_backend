const { default: mongoose } = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    dName: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("department", departmentSchema);
