import picture from "../assets/picture.png";

const half = [
  {
    title: "Enjoy",
    type: "With",
    description: "Earphone",
    image: picture,
  },
  {
    title: "Enjoy",
    type: "With",
    description: "Earphone",
    image: picture,
  },
  {
    title: "Enjoy",
    type: "With",
    description: "Earphone",
    image: picture,
  },
];

const Catagoery2 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 py-3 ">
      {half.map((c, index) => (
        <div
          key={c.description}
          className={` relative w-full h-[35vh] border-2 border-gray-200  rounded-3xl overflow-hidden bg-gray-500 px-10 py-1 flex items-center    ${index === half.length - 3 ? "col-span-1 sm:col-span-2" : ""}   `}
        >
          {/* Text content */}
          <div className="w-1/2 z-10">
            <h1 className="text-2xl text-fuchsia-100">{c.title}</h1>
            <h1 className="text-3xl text-white font-bold">{c.type}</h1>
            <h1 className="text-4xl font-bold leading-none mt-2 py-3">
              {c.description}
            </h1>
            <button className="text-white bg-red-500  cursor-pointer hover:scale-105 duration-200 py-2  px-8 rounded-full relative z-10">
              Browse
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={c.image}
              alt={c.description}
              className="w-37.5 relative z-20"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catagoery2;
