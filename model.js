const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      //unique: true,
      required: true,
    },
    /*name: {
      type: String,
      required: true,
    },*/
    description: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const data = mongoose.model("Data", Schema);
module.exports = data;
