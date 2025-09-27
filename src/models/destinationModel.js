import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  label: String,
  link: String,
});

export default mongoose.models.Destination || mongoose.model("Destination", DestinationSchema);