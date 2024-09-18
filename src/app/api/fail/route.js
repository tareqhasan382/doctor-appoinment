import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";

export async function POST(req, res) {
  try {
    await connectMongodb();
    const data = await req.json();
    console.log("API Fail :", data);
    // console.log("API response data :", response.data.GatewayPageURL);
    return NextResponse.json({ data: "response.data.GatewayPageURL" });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to fail",
      success: false,
    });
  }
}
