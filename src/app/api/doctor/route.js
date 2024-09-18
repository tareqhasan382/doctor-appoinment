import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import DoctorModel from "../../../../lib/models/DoctorModel";
import { authOptions } from "../auth/[...nextauth]/route";
export const POST = async (req, res) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    await connectMongodb();
    const data = await req.json();

    const result = await DoctorModel.create(data);
    return NextResponse.json(
      {
        message: "Doctor created successfully.",
        success: true,
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log("[DOCTOR_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export async function GET(req, res) {
  try {
    await connectMongodb();
    const { searchParams } = new URL(req.url);
    const speciality = searchParams.get("speciality");
    let query = {};

    if (speciality) {
      query.speciality = speciality;
    }
    // console.log("query:", query);
    const result = await DoctorModel.find(query);
    // console.log("result:", result);
    return NextResponse.json(
      {
        message: "Doctors retrieved successfully.",
        success: "true",
        data: result,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Data retrive failed.", success: "false" },
      { status: 500 }
    );
  }
}
