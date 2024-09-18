import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import BookingModel from "../../../../lib/models/BookingModel";

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const tran_id = searchParams.get("tran_id");

  await connectMongodb();

  const response = await BookingModel.find({ tran_id: tran_id });
  console.log("API success response:", response);
  return NextResponse.redirect("http://localhost:3000/doctors");
}

// Updated GET method (Remove req.json() and handle via query parameters)
// export async function GET(req, res) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const tran_id = searchParams.get("tran_id"); // Get tran_id from query params

//     console.log("API success body GET:", tran_id);
//     await connectMongodb();

//     const response = await BookingModel.find({ tran_id: tran_id });
//     console.log("API success:", response);

//     return NextResponse.json({ data: response });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Failed to retrieve success GET",
//       success: false,
//     });
//   }
// }
