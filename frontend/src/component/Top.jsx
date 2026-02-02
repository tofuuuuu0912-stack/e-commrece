import picture from "../assets/picture.png";

const lite = [
  {
    title: "Beats Solo",
    type: "Wireless",
    description: "HEAD PHONE",
    image: picture,
  },
];

const Top = () => {
  return (
    <div className="flex items-center justify-center py-3">
      {lite.map((p, index) => (
        <div
          key={index}
          className="relative w-full h-[80vh] border-2 border-gray-200 shadow-2xs rounded-3xl overflow-hidden bg-gray-200 px-4 lg:px-20 py-11 sm:py-20 flex flex-col sm:flex-row items-center"
        >
          <div className="w-full sm:w-1/2 z-10 text-center sm:text-left">
            <h1 className="text-2xl text-black font-bold">{p.title}</h1>

            <h1 className="text-6xl sm:text-7xl font-bold mt-8">{p.type}</h1>

            <h1 className="text-3xl sm:text-9xl font-extrabold text-white mt-6 text-nowrap">
              {p.description}
            </h1>
            <div className="mt-6">
              <button className="text-white bg-red-500 cursor-pointer hover:scale-105 duration-200 py-2 px-8 rounded-full relative z-10">
                Show Now
              </button>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex justify-center items-center bg-gray-200 mt-6 sm:mt-0">
            <img
              src={p.image}
              alt={p.title}
              className="w-full max-w-125 relative z-20"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top;