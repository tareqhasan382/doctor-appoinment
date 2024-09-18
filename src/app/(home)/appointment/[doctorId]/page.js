import AppointmentBooking from "@/components/UI/AppointmentBooking";
import Image from "next/image";

// doctorId]
const { BASEURL } = require("../../page");

const getDoctor = async (doctorId) => {
  try {
    const result = await fetch(`${BASEURL}/api/doctor/${doctorId}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Details = async ({ params }) => {
  const getData = await getDoctor(params?.doctorId);
  //   console.log("getData:", getData);
  return (
    <div className=" w-full  my-10 ">
      <div className=" w-full h-auto flex lg:flex-row flex-col items-center gap-5 lg:px-0 px-4 ">
        <div className=" relative w-[300px] h-[350px]  rounded-md bg-[#5F6FFF] ">
          <Image
            src={getData?.data?.doctorPicture}
            width={300}
            height={300}
            alt="doctor Picture"
            className=" absolute bottom-0 "
          />
        </div>

        <div className=" w-full min-h-[350px] outline outline-1 outline-gray-400 rounded-md p-5 ">
          <h1 className=" font-bold ">{getData?.data?.name}</h1>
          <div className=" flex items-center ">
            <p className=" font-[18px] ">{getData?.data?.degree}</p>
            <p>-</p>
            <p className=" font-[18px] ">{getData?.data?.speciality}</p>
            <p className=" font-[18px] p-2 outline outline-1 outline-gray-400 rounded-3xl mx-2 ">
              {getData?.data?.experience} Years
            </p>
          </div>
          <div>
            <h3 className=" font-bold ">About</h3>
            <p>{getData?.data?.aboutDoctor}</p>
          </div>
          <h3 className=" my-3 ">
            <span className=" font-bold ">Appointment fee: BD</span>{" "}
            {getData?.data?.fees}
          </h3>
        </div>
      </div>
      <div className=" my-8 ">
        {/* <h1 className=" font-bold ">Booking slots</h1> */}
        <AppointmentBooking doctor={getData?.data} />
      </div>
      <div className=" w-full h-auto flex flex-col items-center my-10 ">
        <h1 className=" font-bold ">Related Doctors</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
    </div>
  );
};
export default Details;
