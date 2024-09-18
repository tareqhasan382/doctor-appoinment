import Image from "next/image";
import doctor01 from "../../assets/dr-girl.jpg";
import doctor02 from "../../assets/dr-girl-2.jpg";
import doctor03 from "../../assets/dr-man.jpg";
import FindSpeciality from "@/components/UI/FindSpeciality";
import DoctorsBook from "@/components/UI/DoctorsBook";
import BottomBanner from "@/components/UI/BottomBanner";
import header_img from "../../assets/header_img.png";
export const BASEURL = "https://doctor-appoinment-blond.vercel.app"; //"http://localhost:3000";
export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col items-center  ">
      <div className=" my-2 w-full lg:h-[600px] h-[700px]  bg-blue-600 text-white rounded grid lg:grid-cols-2 grid-cols-1 lg:px-6 lg:gap-6 ">
        <div className=" flex flex-col justify-center px-6 gap-4 lg:my-10 ">
          <div>
            <h1 className=" lg:text-5xl text-2xl font-bold ">
              Book Appointment
            </h1>
            <h1 className=" lg:text-5xl text-2xl font-bold ">
              With Trusted Doctors
            </h1>
          </div>
          <div className=" w-full flex lg:flex-row flex-col lg:items-center my-6 ">
            <div className=" flex items-center ">
              <div className=" w-16 h-16 bg-black rounded-full overflow-hidden ">
                <Image
                  src={doctor01}
                  alt="doctor-image"
                  width={500}
                  height={500}
                  className=" rounded-full object-cover "
                />
              </div>
              <div className=" relative right-3 w-16 h-16 bg-black rounded-full overflow-hidden ">
                <Image
                  src={doctor03}
                  alt="doctor-image"
                  width={500}
                  height={500}
                  className=" absolute rounded-full object-cover "
                />
              </div>
              <div className="relative right-6 w-16 h-16 bg-black rounded-full overflow-hidden ">
                <Image
                  src={doctor02}
                  alt="doctor-image"
                  width={500}
                  height={500}
                  className=" rounded-full object-cover "
                />
              </div>
            </div>
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div>
            <button className=" px-4 py-2 bg-white hover:bg-black hover:text-white duration-300 text-black font-semibold rounded-full ">
              Book appointment
            </button>
          </div>
        </div>
        <div className=" w-full lg:h-full max-md:landscape:h-[405px] md:portrait:h-[405px] flex items-end justify-center">
          <Image src={header_img} alt="doctor-image" width={600} height={700} />
        </div>
      </div>
      <FindSpeciality />
      <DoctorsBook />
      <BottomBanner />
    </div>
  );
}
