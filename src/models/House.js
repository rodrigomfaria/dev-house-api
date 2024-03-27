import { Schema, model } from "mongoose";

const HouseSchema = new Schema(
  {
    tumbmail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { toJSON: { virtuals: true } }
);

HouseSchema.virtual("tumbmail_url").get(function () {
  return `http://localhost:3000/files/${this.tumbmail}`;
});

export default model("House", HouseSchema);
