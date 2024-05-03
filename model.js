const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    target: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const data = mongoose.model("Data", Schema);
module.exports = data;
