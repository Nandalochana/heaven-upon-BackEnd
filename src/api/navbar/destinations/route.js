import dbConnect from "../../../../utils/dbConnect.js";
import Destination from "../../../../models/destination.js";

export async function GET() {
  await dbConnect();
  const destinations = await Destination.find({});
  return Response.json(destinations);
}