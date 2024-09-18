import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import axios from "axios";
import BookingModel from "../../../../lib/models/BookingModel";

export async function POST(req, res) {
  const tran_id = `tran_${Date.now()}`;
  try {
    await connectMongodb();
    const data = await req.json();
    const sslData = {
      store_id: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_ID,
      store_passwd: process.env.NEXT_PUBLIC_SSLCOMMERZ_STORE_PASSWORD,
      total_amount: data?.fees,
      currency: "BDT",
      tran_id: tran_id,
      success_url: `http://localhost:3000/api/success?tran_id=${tran_id}`,
      fail_url: process.env.NEXT_PUBLIC_SSLCOMMERZ_FAIL_URL,
      cancel_url: process.env.NEXT_PUBLIC_SSLCOMMERZ_CANCEL_URL,
      ipn_url: "http://localhost:3030/ipn",
      shipping_method: "Courier",
      product_name: "Medical",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: data.doctorName,
      cus_email: "data.email",
      cus_add1: "data.address",
      cus_phone: "data.phone",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };
    const response = await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_SSLCOMMERZ_API_URL,
      data: sslData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const orderData = { ...data, tran_id: tran_id };
    console.log("orderdata:", orderData);
    await BookingModel.create(orderData);

    return NextResponse.json({ data: response.data.GatewayPageURL });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to Save Booking",
      success: false,
    });
  }
}
