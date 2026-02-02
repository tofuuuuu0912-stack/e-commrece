import { FaCarSide } from "react-icons/fa";
const shop = [
  {
    title: "Free Delevery",
    discription: "Free Devlivery All Over Nepal",
  },
  {
    title: "Free Delevery",
    discription: "Free Devlivery All Over Nepal",
  },
  {
    title: "Free Delevery",
    discription: "Free Devlivery All Over Nepal",
  },
  {
    title: "Free Delevery",
    discription: "Free Devlivery All Over Nepal",
  },
];

const Transportation = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4  gap-8 sm:gap-0  py-25 ">
      {shop.map((d) => (
       
        <div className=" flex flex-col justify-center sm:flex-row gap-6">
          <FaCarSide className="text-red-500  text-4xl sm:text-6xl  "/>
          <div className=" py-42px-0 sm:px-4">

          
          <p className="font-bold text-xl ">{d.title}</p>
          <p className="text-gray-500">{d.discription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transportation;
