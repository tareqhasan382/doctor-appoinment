import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import BookingModel from "../../../../lib/models/BookingModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req, res) {
  try {
    await connectMongodb();
    const data = await req.json();
    const result = await BookingModel.create(data);
    return NextResponse.json(
      {
        message: "Booking Save successfully",
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Save Booking",
      success: false,
    });
  }
}
export async function GET(req, res) {
  try {
    await connectMongodb();
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const result = await BookingModel.find({
      patient: session.user._id,
    }).populate("patient");
    // console.log("result:", result);
    return NextResponse.json(
      {
        message: "Bookings fetched successfully",
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json({
      message: "Failed to fetch bookings",
      success: false,
    });
  }
}
