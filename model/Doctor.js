const { default: mongoose } = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hospitalName: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    education: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("doctor", doctorSchema);
