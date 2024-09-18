// timesolt
import { NextResponse } from "next/server";
import TimeSlotModel from "../../../../lib/models/TimeSlotModel";
import { connectMongodb } from "../../../../lib/mongodb";

export async function POST(req, res) {
  try {
    await connectMongodb();
    const data = await req.json();

    const result = await TimeSlotModel.create(data);

    return NextResponse.json({
      message: "Time slot created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create time slot",
      success: false,
    });
  }
}
