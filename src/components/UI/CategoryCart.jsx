import Image from "next/image";
import doctor03 from "../../assets/dr-man.jpg";
const CategoryCart = ({ name, img }) => {
  return (
    <div className=" flex flex-col items-center justify-center hover:-translate-y-3 duration-500 ">
      <div className=" w-24 h-24 object-cover overflow-hidden rounded-full ">
        <Image
          src={img ? img : doctor03}
          alt="doctor"
          width={600}
          height={600}
          className=" object-cover "
        />
      </div>
      <p className=" text-[14px] w-auto ">{name}</p>
    </div>
  );
};

export default CategoryCart;
